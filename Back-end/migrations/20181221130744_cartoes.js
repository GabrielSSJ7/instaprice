exports.up = function(knex, Promise) {
  return knex.schema.createTable("cartoes", table => {
    table.increments("id").primary();
    table
      .bigInteger("usuarioId")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario");
    table.text("nome");
    table.text("bandeira");
    table.text("numero");
    table.text("validade");
    table.text("codigo_seguranca");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cartoes");
};
