// Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
db.movies.find({ category: { $all: ["action", "adventure"] } }).pretty();

// Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
db.movies.find(
    { $and: [
        { category: { $all: ["adventure"] } },
        {"imdbRating": { $gt: 7 } }
    ]}
).pretty();

// Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
db.movies.updateMany(
    { title: { $all: ["Batman"] } },
    { $push: { ratings: { $each: [85, 100, 102, 105]  } } }
);

// Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
db.movies.updateMany(
    { title: { $all: ["Godzilla"] } },
    { $push: { ratings: { $each: [78, 52, 95, 102]  } } }
);

// Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
db.movies.updateMany(
    { title: { $all: ["Home Alone"] } },
    { $push: { ratings: { $each: [200, 99, 65]  } } }
);

// Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .
db.movies.find(
    { ratings: { $elemMatch: { $gt: 103 } } },
    { title: 1, ratings: 1, _id: 0 }
).pretty();

// Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
db.movies.find(
    { ratings: { $elemMatch: { $gte: 100, $lt: 105 } } },
    { title: 1, ratings: 1, _id: 0 }
).pretty();

// Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .
db.movies.find(
    {
        ratings: { 
            $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] } 
        },
    },
    { title: 1, ratings: 1, _id: 0 }
).pretty();

// Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .
db.movies.find(
    {
        ratings: { 
            $elemMatch: { $gte: 103 } 
        },
    },
    { title: 1, ratings: 1, category: 1, _id: 0 }
).pretty();
