// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
db.cliente.aggregate(
  [{ $match : { sexo : "MASCULINO" } }]
);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .
db.cliente.aggregate(
  [
    {
      $match: {
        $and: [
          { sexo : "FEMININO" } ,
          { dataNascimento: { $in: ["1995-mm-ddTHH:MM:ssZ", "2005-mm-ddTHH:MM:ssZ"] } }
        ]
      }
    }
  ]
);