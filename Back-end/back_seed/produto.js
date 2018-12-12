exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("produto")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("produto").insert([
        {
          id: 1,
          usuarioId: 1,
          nome: "BMW",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imagem: "https://s2.glbimg.com/vP1bg3E2yIk3xT87XJM3AElNpFI=/e.glbimg.com/og/ed/f/original/2018/07/31/p90298672_highres_the-new-bmw-m2-compe.jpg",
          preco: "80000"
        },
        {
          id: 2,
          usuarioId: 2,
          nome: "iPhone",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imagem: "https://a-static.mlcdn.com.br/1500x1500/iphone-6s-apple-32gb-cinza-espacial-4g-tela-4-7-retina-cam-12mp-selfie-5mp-ios-11-proc-a9/magazineluiza/216972900/e8a325bd0d874e7e6d8d52ec6bffd1f2.jpg",
          preco: "1500"
        },
        {
          id: 3,
          usuarioId: 1,
          nome: "Cama elástica",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imagem: "https://w1.ezcdn.com.br/lacucabrinquedos/fotos/grande/35fg1/cama-elastica-3-05m-frete-gratis-completa-colorida-e-importada.jpg",
          preco: "8530"
        }
      ]);
    });
};
