const app = require("express")();
const http = require('http').Server(app)
const io = require('socket.io')(http)

const consign = require("consign");

const port = process.env.PORT || 4000;

const db = require("./config/db");

app.db = db;

consign()
  .then("./config/middlewares.js")
  .include("./config/passport.js")
  .then("./components/validation.js")  
  .then("./components/user.js")
  .then("./components/produto.js")
  .then("./config/routes.js")
  .into(app);
  
  
  io.on('connection', (socket) => {
    //console.log('new connection', socket.id);
  })

http.listen(port, () => {
  console.log("iniciando servidor backend..." + port);
});
