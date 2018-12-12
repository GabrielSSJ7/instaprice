
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable("produto", table => {
        table.increments("id").primary();
        table.bigInteger('usuarioId').unsigned().index().references('id').inTable('usuario');
        table.text("nome").notNull();
        table.text("desc").notNull();
        table.text("preco").notNull();
        table.text("imagem").notNull();
        
    })

    //Imagem do produto, Nome do produto, descrição do produto, preço do produto, preço do produto, quantidade de like, comentários
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('produto');
};
