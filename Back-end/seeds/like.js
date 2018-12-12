
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('like').del()
    .then(function () {
      // Inserts seed entries
      return knex('like').insert([
        {usuarioLikeId: 1, produtoLikeId: 2},
        {usuarioLikeId: 2, produtoLikeId: 3},
        {usuarioLikeId: 3, produtoLikeId: 1}
      ]);
    });
};
