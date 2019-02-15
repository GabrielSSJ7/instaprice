exports.up = function(knex, Promise) {
  return knex.schema.createTable("enderecos", table => {
    table.increments("id").primary();
    table
      .bigInteger("usuarioId")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario");
    table.text("endereco");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("enderecos");
};
