module.exports = app => {

  app.route("/signin").post(app.components.user.signin);
  app.route("/login").post(app.components.user.login);
  app.route("/validateToken").post(app.components.user.validateToken);

   // Rotas protegidas
  app.route("/main").all(app.config.passport.authenticate()).get(app.components.produto.listaProdutoHome);
  app.route("/like").all(app.config.passport.authenticate()).post(app.components.produto.curtirProduto);
  app.route("/comment").all(app.config.passport.authenticate()).post(app.components.produto.comentar);
  app.route("/insert").all(app.config.passport.authenticate()).post(app.components.produto.inserirProduto);
};
