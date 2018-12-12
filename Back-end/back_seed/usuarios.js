exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("usuario")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("usuario").insert([
        {
          id: 1,
          nome: "Gabriel Luz",
          email: "gabriel.n64@hotmail.com",
          password: "instaprice_",
          sexo: "M",
          cpf: "469.969.998-71",
          endereco: "Rua avaré, 511. Jardim Santo Eduardo.",
          foto:
            "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/44993511_1924539667632902_3193608368430252032_n.jpg?_nc_cat=108&_nc_eui2=AeHpkvVjgibvv5BQNSuWgkF-tTk4rCxPXhuwQ_VSYqE1dSrW1LX7nWGcLO4HVwEeWLjQ8QS0qB-nbremJM9bfaz-O5xDNYnufT5ScBkRsH0htw&_nc_ht=scontent-gru2-2.xx&oh=34d8100afd7ee07c6f1ae4aaff1c7e57&oe=5CA226E9"
        },
        {
          id: 2,
          nome: "Mariana Cruz",
          email: "mariana@hotmail.com",
          password: "instaprice_",
          sexo: "F",
          cpf: "409.909.908-71",
          endereco: "Rua bristol, 51. Jardim Santo Eduardo.",
          foto:
            "https://extra.globo.com/incoming/22596522-3b5-601/w448h673-PROP/xpaula-11.JPG.pagespeed.ic.97T3xX_nJP.jpg"
        },
        {
          id: 3,  
          nome: "Marcos Pontes",
          email: "pontes@hotmail.com",
          password: "instaprice_",
          sexo: "F",
          cpf: "109.409.908-70",
          endereco: "Avenida Pierce, 51. Jardim Santo Amaro.",
          foto:
            "http://s2.glbimg.com/Deg87od-3ss0tpRvU01XCwychpk=/e.glbimg.com/og/ed/f/original/2014/09/19/astronauta_marcos_pontes_dep_fed_psb-sp_4077_-_v3.jpg"
        }
      ]);
    });
};
