exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("comentarios")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("comentarios").insert([
        {
          usuarioId: 1,
          produtoId: 2,
          comentario: "Muito bom, estou interessado"
        },
        {
          usuarioId: 2,
          produtoId: 1,
          comentario: "Queria ter dinheiro pra comprar"
        },
        {
          usuarioId: 3,
          produtoId: 1,
          comentario: "Eu compro"
        }
      ]);
    });
};
