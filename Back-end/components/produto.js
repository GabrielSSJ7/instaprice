const jwt = require("jwt-simple");
const { authSecret } = require("../.env");

module.exports = app => {
  const {
    existsOrError,
    notExistsOrError,
    equalsOrError
  } = app.components.validation;
  let liked = [];
  let likes = []

  const compareLikeAndUser = async (pId, uId) => {
    await app
      .db("like")
      // .innerJoin("usuario", "like.usuarioLikeId", "usuario.id")
      .where({
        produtoLikeId: pId,
        usuarioLikeId: uId
      })
      .then(like => {
        if (like.length > 0) {
          liked.push(pId);
        }

        // console.log(uId, pId);
      });
  };

  const countLike = () =>{
    app.db("produto")
    .select("produto.id")
    .innerJoin("like", "produto.id", "like.produtoLikeId")
    .count("usuarioLikeId")
    .groupBy("produto.id")
    .then(like => {
       //console.log(like);
       if (like.length > 0) {
        likes = like;
      }
    });
  }

  const listaProdutoHome = async (req, res) => {
    countLike()
    await app.db
      // .select(
      //   "produto.id",
      //   "produto.nome",
      //   "produto.desc",
      //   "produto.preco",
      //   "produto.imagem"
      // )
      // .count("like.usuarioLikeId as curtidas")
      // .from("produto")
      // .innerJoin("usuario", "usuarioId", "usuario.id")
      // .innerJoin("like", "like.usuarioLikeId", "produto.id")
      // .groupBy(
      //   "produto.id",
      //   "produto.nome",
      //   "produto.desc",
      //   "produto.preco",
      //   "produto.imagem"
      // )
      // .orderBy("produto.id", "asc")
      .raw(
        'select  produto.id,produto.nome,produto.desc,produto.preco,produto.imagem,usuario.id as usuarioLikeId, usuario.foto, usuario.nome as nome_usuario from "produto" INNER JOIN "usuario" on "usuarioId" = usuario.id  group by usuario.foto, usuario.nome, produto.id, produto.nome, produto.desc, produto.preco, usuario.id '
      )

      .then(async produto => {
     

        await app.db
          .select(
            "comentarios.comentario",
            "comentarios.produtoId",
            "usuario.nome",
            "usuario.foto"
          )
          .from("comentarios")
          .innerJoin("usuario", "comentarios.usuarioId", "usuario.id")
          .innerJoin("produto", "comentarios.produtoId", "produto.id")
          .groupBy(
            "comentarios.comentario",
            "comentarios.produtoId",
            "comentarios.created_at",
            "usuario.nome",
            "usuario.foto"
          )
          .orderBy("comentarios.created_at", "desc")
          .then(async comentario => {
            // for (let a = 0; a < produto.length; a++) {
            //   console.log(a)
            //   await app
            //     .db("like")
            //     .innerJoin("usuario", "like.usuarioLikeId", "usuario.id")
            //     .where({
            //       produtoLikeId: produto[a].id,
            //       usuarioLikeId: produto[a].usuarioLikeId
            //     })
            //     .then(like => {
            //       console.log(like);
            //     });
            // }

            let userToken = req.headers.authorization;
            userToken = userToken.substr(7);
            const token = jwt.decode(userToken, authSecret);

            for (let a = 0; a < produto.rows.length; a++) {
              await compareLikeAndUser(produto.rows[a].id, token.id);
            }

            let comentarios = [];
            for (let x = 0; x < produto.rows.length; x++) {
              if (produto.rows[x].id === liked[x]) {
                produto.rows[x] = { ...produto.rows[x], liked: true };
              } else {
                produto.rows[x] = { ...produto.rows[x], liked: false };
              }

              for(let l =0; l < likes.length; l++){
                if(produto.rows[x].id === likes[l].id) {
                  
                  produto.rows[x] = { ...produto.rows [x], likes: likes[l].count};
                }
              }
             

              for (let y = 0; y < comentario.length; y++) {
                if (produto.rows[x].id == comentario[y].produtoId) {
                  comentarios.push({
                    comentario: comentario[y].comentario,
                    nome: comentario[y].nome,
                    foto: comentario[y].foto
                  });
                  produto.rows[x] = {
                    ...produto.rows[x],
                    comentarios: comentarios
                  };
                }
              }
              comentarios = [];
            }

            liked = [];

            return res.json(produto.rows);
          });
      });
  };

  const curtirProduto = async (req, res) => {
    const { produtoId, token } = req.body;

    const userData = jwt.decode(token, authSecret);

    if (!produtoId && !userData.id) {
      res.status(400).send("Você não informou o id do usuário ou produto.");
    }

    const user = await app.db("like").where({
      usuarioLikeId: userData.id,
      produtoLikeId: produtoId
    });

    if (user.length == 0) {
      app
        .db("like")
        .insert({
          produtoLikeId: produtoId,
          usuarioLikeId: userData.id
        })
        .then(_ => res.status(200).send(true))
        .catch(err => {
          console.log(err);
          return res.status(500).send(err);
        });
    } else {
      const re = await app
        .db("like")
        .where({
          usuarioLikeId: userData.id,
          produtoLikeId: produtoId
        })
        .del();
      console.log(re);
      return res.status(200).send("Deleted");
    }
  };

  const comentar = (req, res) => {
    const { produtoId, comentario, token } = req.body;

    const userData = jwt.decode(token, authSecret);
    app
      .db("comentarios")
      .insert({
        produtoId,
        usuarioId: userData.id,
        comentario
      })
      .then(_ => res.status(200).send(true))
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  };

  const inserirProduto = (req, res) => {
    const { nome, preco, desc, imagem, token } = req.body;
    const userData = jwt.decode(token, authSecret);
    try {
      existsOrError(nome, "É necessário que o item tenha nome");
      existsOrError(preco, "É necessário que o item tenha um preço");
      existsOrError(desc, "É necessário descrever o que você está vendendo");

      app
        .db("produto")
        .insert({
          usuarioId: userData.id,
          nome,
          desc,
          preco,
          imagem
        })
        .then(_ => res.status(200).send(true));
    } catch (msg) {
      return res.status(400).send(msg);
    }
  };

  return { listaProdutoHome, curtirProduto, comentar, inserirProduto };
};
