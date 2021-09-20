// use agg_example;
// db.clients.insertMany([
//   { name: "Dave America", State: "Florida" },
//   { name: "Ned Flanders", State: "Alasca" },
//   { name: "Mark Zuck", State: "Texas" },
//   { name: "Edna Krabappel", State: "Montana" },
//   { name: "Arnold Schuz", State: "California" },
//   { name: "Lisa Simpson", State: "Florida" },
//   { name: "Barney Gumble", State: "Texas" },
//   { name: "Homer Simpson", State: "Florida" },
// ]);

// db.transactions.insertMany([
//   { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
//   { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
//   { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
//   { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
//   { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
//   { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
//   { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
//   { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
//   { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
//   { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'FloridaBank' },
// ]);

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
    {
  lookup: {
        from: "transactions",
        let: { user_name: "$name" },
        pipeline: [
          {
  match: {
    $expr:
            { $eq: [ "$from",  "$$user_name" ] },         
    }
    },
        ],
        as: "extractBanking"
      }
    }
  ]);

//   Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;
db.clients.aggregate([
    {
  lookup: {
        from: "transactions",
        let: { user_name: "$name" },
        pipeline: [
          {
  match: {
    $expr:
            { $eq: [ "$to",  "$$user_name" ] },         
    }
    },
        ],
        as: "extractBanking"
      }
    },
    {
        $sort:{ State: 1 }
    },
    {
        $limit: 4
    }
  ]);


// db.products.insertMany([
//   { "name": "Ball", "purchase_price": 7.6, "taxes": 1.9, "sale_price": 12.5, "quantity": 5 },
//   { "name": "Baseball bat", "purchase_price": 18.5, "taxes": 5.3, "sale_price": 39.9, "quantity": 12 },
//   { "name": "Sneakers", "purchase_price": 10.4, "taxes": 1.50, "sale_price": 14.9, "quantity": 3 },
//   { "name": "Gloves", "purchase_price": 2.85, "taxes": 0.90, "sale_price": 5.70, "quantity": 34 },
//   { "name": "Jacket", "purchase_price": 28.9, "taxes": 10.80, "sale_price": 59.9, "quantity": 20 },
//   { "name": "Mousepad", "purchase_price": 16.6, "taxes": 3.40, "sale_price": 29.9, "quantity": 8 },
//   { "name": "Monitor", "purchase_price": 119.9, "taxes": 39.20, "sale_price": 240.6, "quantity": 11 },
// ]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
    {
        $match: { State: "Florida" }
      },
    {
  lookup: {
        from: "transactions",
        let: { user_name: "$name" },
        pipeline: [
          {
  match: {
    $expr:
            { $eq: [ "$to",  "$$user_name" ] },         
    }
    },
        ],
        as: "extractBanking"
      }
    },
  ]);

//Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
db.storage.aggregate([
    { $project: { _id: 0, item: 1, nome: 1, total: { $add: ["$taxes", "$purchase_price"] } } }
]);

// Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.storage.aggregate([
    { $project: { value: 1, roundedValue: { $round: ["$value"] } } }
]);