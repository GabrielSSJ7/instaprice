
exports.up = function(knex, Promise) {
    return knex.schema.createTable("like", table => {
        table.bigInteger('usuarioLikeId').unsigned().index().references('id').inTable('usuario');
        table.bigInteger('produtoLikeId').unsigned().index().references('id').inTable('produto');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('like');
};
