const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../.env");
const jwt = require("jwt-simple");

module.exports = app => {
  const {
    existsOrError,
    validateEmail,
    validateCPF
  } = app.components.validation;

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const signinWithFacebook = async (req, res) => {
    const user = { ...req.body };

    try {
      existsOrError(user.nome, "Nome não informado.");
      validateEmail(user.email, "O e-mail informado é inválido.");
      existsOrError(user.email, "E-mail não informado.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const userDB = await app
      .db("usuario")
      .where({ email: user.email })
      .first();

    // if already logged in other time
    if (userDB) {
      const now = Math.floor(Date.now() / 1000);

      const payload = {
        id: userDB.id,
        name: userDB.name,
        email: userDB.email,
        iat: now,
        exp: now + 60 * 60 * 24
        // exp: now + 1
      };

      return res.json({
        ...payload,
        token: jwt.encode(payload, authSecret)
      });
    }

    app
      .db("usuario")
      .returning("id")
      .insert(user)
      .then(id => {
        const now = Math.floor(Date.now() / 1000);

        const payload = {
          id: id[0],
          name: user.name,
          email: user.email,
          iat: now,
          exp: now + 60 * 60 * 24
          // exp: now + 1
        };

        return res.json({
          ...payload,
          token: jwt.encode(payload, authSecret)
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  };

  const signin = async (req, res) => {
    const user = { ...req.body };

    try {
      existsOrError(user.nome, "Nome não informado.");
      validateEmail(user.email, "O e-mail informado é inválido.");
      existsOrError(user.email, "E-mail não informado.");
      existsOrError(user.password, "Senha não informada.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const userDB = await app
      .db("usuario")
      .where({ email: user.email })
      .first();

    if (userDB) return res.status(400).send("Este e-mail já está sendo usado!");

    user.password = encryptPassword(user.password);

    app
      .db("usuario")
      .insert(user)
      .then(_ => res.status(200).send(true))
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  };

  const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Informe usuário e senha!");
    }

    try {
      validateEmail(req.body.email, "O e-mail informado é inválido.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const user = await app
      .db("usuario")
      .where({ email: req.body.email })
      .first();

    if (!user) return res.status(400).send("Usuário não encontrado!");

    // const isMatch = bcrypt.compareSync(req.body.password, user.password);
    // if (!isMatch) return res.status(401).send("Email/Senha inválidos!");

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      iat: now,
      exp: now + 60 * 60 * 24
      // exp: now + 1
    };

    return res.json({
      ...payload,
      token: jwt.encode(payload, authSecret)
    });
  };

  const getAllUserData = async (req, res) => {
    const paramToken = req.params.token || null;
    const token = jwt.decode(paramToken, authSecret);
    const user = await app
      .db("usuario")
      .where({ id: token.id })
      .first();

    if (!user) {
      return res.status(400).send("Usuário não encontrado!");
    } else {
      console.log(user)
      return res.json(user);
    }
  };

  const editUser = (req, res) => {
    const userData = req.body || null;

    const token = jwt.decode(userData.token, authSecret);

    if (userData.foto) {
      app
        .db("usuario")
        .where({ id: token.id })
        .update({
          foto: userData.foto
        })
        .then(_ => res.status(200).send(true))
        .catch(err => {
          console.log(err);
          return res.status(500).send(err);
        });
    } else {
      if (userData.cpf) {
        if (validateCPF(userData.cpf)) {
          app
            .db("usuario")
            .where({ id: token.id })
            .update({
              nome: userData.nome,
              sexo: userData.sexo,
              cpf: userData.cpf,
              data_de_nascimento: userData.data_de_nascimento
            })
            .then(_ => res.status(200).send(true))
            .catch(err => {
              return res.status(500).send(err);
            });
        } else {
          return res.status(400).send("O CPF digitado é inválido");
        }
      } else {
        app
          .db("usuario")
          .where({ id: token.id })
          .update({
            nome: userData.nome,
            sexo: userData.sexo,
            data_de_nascimento: userData.data_de_nascimento
          })
          .then(_ => res.status(200).send(true))
          .catch(err => {
            return res.status(500).send(err);
          });
      }
    }
  };

  const getAddress = async (req, res) => {
    const paramToken = req.params.token || null;
    const token = jwt.decode(paramToken, authSecret);
    const address = await app.db("enderecos").where({ usuarioId: token.id });

    if (!address) {
      return res.status(400).send("Nenhum endereço encontrado");
    } else {
      return res.json(address);
    }
  };

  const insertEditAddress = async (req, res) => {
    const { address, token, id } = req.body || null;

    try {
      existsOrError(address, "Você não inseriu o endenreço");
    } catch (msg) {
      return res.status(400).send(msg);
    }
    dataToken = jwt.decode(token, authSecret);
    const addressDB = await app
      .db("enderecos")
      .where({ id: id ? id : 0 })
      .first();

    if (addressDB) {
      app
        .db("enderecos")
        .where({ id: addressDB.id })
        .update({
          endereco: address
        })
        .then(_ => res.status(200).send(true))
        .catch(err => {
          console.log(err);
          return res.status(500).send(err);
        });
    } else {
      app
        .db("enderecos")
        .insert({
          endereco: address,
          usuarioId: dataToken.id
        })
        .then(id => {
          return res.status(200).send(true);
        })
        .catch(err => {
          console.log(err);
          return res.status(500).send(err);
        });
    }
  };

  const deleteAddress = (req, res) => {
    const { id } = req.body || null;

    app
      .db("enderecos")
      .where({
        id
      })
      .del()
      .then(_ => {
        return res.status(200).send(true);
      })
      .catch(err => {
        return res.status(500).send("dEU RUIm");
      });
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        //console.log(Math.floor(Date.now() / 1000))
        //console.log(new Date())
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (e) {
      // problema com o token
    }

    res.send(false);
  };

  const getAllUser = (req, res) => {
    app
      .db("usuario")
      .then(_ => {
        return res.json(_);
      })
      .catch(err => {
        return res.status(500).send("dEU RUIm");
      });
  };


  return {
    signin,
    signinWithFacebook,
    login,
    validateToken,
    getAllUserData,
    editUser,
    getAddress,
    insertEditAddress,
    deleteAddress,
    getAllUser
  };
};
