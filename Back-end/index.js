const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const consign = require("consign");

const port = process.env.PORT || 4000;

const db = require("./config/db");

app.db = db;

consign()
  .then("./config/middlewares.js")
  .include("./config/passport.js")
  .then("./components/validation.js")
  .then("./components/user.js")
  .then("./components/cartoes.js")
  .then("./components/produto.js")
  .then("./config/routes.js")
  .into(app);

const { authSecret } = require("./.env");
const jwt = require("jwt-simple");

let users = [];

io.on("connection", socket => {
  console.log('connection', socket.id)
  
  //console.log("conectado", users)
  // for(let i = 0; i < io.sockets.connected.length; i++) {
  //   console.log("conectado", io.sockets.connected[i].id)
  // }

  socket.on('disconnect', ()=>{
    
    for(let i = 0; i < users.length; i++){
      if(users[i].socketId === socket.id){
        console.log("usuarios", users)
        users.splice(i, 1)
      }
    }
  })
  socket.on("registrarUsuario", data => {
    
    const token = jwt.decode(data.token, authSecret);
    app
      .db("usuario")
      .where({ id: token.id })
      .update({
        socketId: socket.id
      })
      .then(_ => {
        users.push([{ id: token.id, socketId: socket.id}])
        //console.log("usuarios", users)
        //console.log(true);
      })
      .catch(err => {
        console.log(err);
      });
  });


  socket.on("usuarioSaiu", data => {
    const token = jwt.decode(data.token, authSecret);
    
  })

  socket.on("sendMsg", data => {
    

    socket.to("").emit("receiveMsg", { msg: data.msg });
    socket.broadcast.emit("receiveMsg", { msg: data.msg });
  });

  
});



http.listen(port, () => {
  console.log("iniciando servidor backend..." + port);
});
