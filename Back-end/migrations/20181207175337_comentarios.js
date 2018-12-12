exports.up = function(knex, Promise) {
  return knex.schema.createTable("comentarios", table => {
    table
      .bigInteger("usuarioId")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario");
    table
      .bigInteger("produtoId")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    table.text("comentario").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comentarios");
};
