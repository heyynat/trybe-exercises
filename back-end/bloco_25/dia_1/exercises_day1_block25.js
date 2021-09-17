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

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
db.cliente.aggregate(
  [
    {
      $match: {
        $and: [
          { sexo : "FEMININO" } ,
          { dataNascimento: { $in: ["1995-mm-ddTHH:MM:ssZ", "2005-mm-ddTHH:MM:ssZ"] } }
        ]
      }
    },
    {
      $limit : 5
    }
  ]
);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.aggregate([
  {
    $match: { uf: "SC" }
  },
  {
    $group: {
      _id: "$uf",
      total: { $sum: 1 }
    }
  }
]);