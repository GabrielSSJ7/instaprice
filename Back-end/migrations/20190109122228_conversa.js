exports.up = function(knex, Promise) {
  return knex.schema.createTable("conversa", table => {
    table.increments("id").primary();
    table.text("idUsuarioRemetente");
    table.text("isUsuarioDestino").notNull();
    table.text("mensagem").notNull();
    table.timestamp("data");
    table.text("visualizado");
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('conversa');
};
