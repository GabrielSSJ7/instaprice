
exports.up = function(knex, Promise) {
  return knex.schema.createTable("usuario", table => {
      table.increments("id").primary();
      table.text("nome").notNull();
      table.text("email").notNull();
      table.text("password").notNull();
      table.text("sexo");
      table.text("cpf");
      table.date("data_de_nascimento");
      table.text("endereco");
      table.text("foto");
  })

//   Nome completo, e-mail, sexo, CPF, data de nascimento, endereço, histórico de compra e venda, Foto da pessoa.
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuario');
};
