module.exports = app => {

  app.route("/signin").post(app.components.user.signin);
  app.route("/signin-with-facebook").post(app.components.user.signinWithFacebook);
  app.route("/login").post(app.components.user.login);
  app.route("/validateToken").post(app.components.user.validateToken);

  app.route("/getAllUser").get(app.components.user.getAllUser)

   // Rotas protegidas
  app.route("/main").all(app.config.passport.authenticate()).get(app.components.produto.listaProdutoHome);
  app.route("/like").all(app.config.passport.authenticate()).post(app.components.produto.curtirProduto);
  app.route("/comment").all(app.config.passport.authenticate()).post(app.components.produto.comentar);
  app.route("/insert").all(app.config.passport.authenticate()).post(app.components.produto.inserirProduto);

  app.route("/useredit").all(app.config.passport.authenticate()).post(app.components.user.editUser);
  app.route("/user/:token").all(app.config.passport.authenticate()).get(app.components.user.getAllUserData);

  app.route("/address/:token").all(app.config.passport.authenticate()).get(app.components.user.getAddress);
  app.route("/inserteditaddress").all(app.config.passport.authenticate()).post(app.components.user.insertEditAddress);
  app.route("/deleteaddress").all(app.config.passport.authenticate()).post(app.components.user.deleteAddress);

  app.route("/cartoes").all(app.config.passport.authenticate()).post(app.components.cartoes.getAllCards);
  app.route("/inserteditcard").all(app.config.passport.authenticate()).post(app.components.cartoes.insertEditCard);
  app.route("/deletecard").all(app.config.passport.authenticate()).post(app.components.cartoes.deleteCard);
};
