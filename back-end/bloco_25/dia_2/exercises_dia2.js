// Exercício 1
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
]);

// Exercício 2
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
    {
        $macth: {
            idade: {
                $gte: 18, $lte: 25
            }
        }
    },
    {
        $count: 'totalClientes'
    }
]);

// Exercício 3
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
    {
        $lookup: {
          from: 'vendas',
          localField: 'clienteId',
          foreignField: 'clienteId',
          as: 'compras'
        }
    }
]);

// Exercício 4
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
    {
        $lookup: {
          from: 'vendas',
          localField: 'clienteId',
          foreignField: 'clienteId',
          as: 'compras'
        }
    },
    {
        $macth: {
            "compras.dataVenda": {
                $gte: ISODate('2019-06-01'),
                $lte: ISODate('2020-03-31')
            }
        }
    },

]);

// Exercício 5
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
    {
        $lookup: {
          from: 'vendas',
          localField: 'clienteId',
          foreignField: 'clienteId',
          as: 'compras'
        }
    },
    {
        $macth: {
            "compras.dataVenda": {
                $gte: ISODate('2019-06-01'),
                $lte: ISODate('2020-03-31')
            }
        }
    },

]).itcount();

// Exercício 6
db.clientes.aggregate([
    {
      addFields: {
        idade: { $floor: {
            $divide: [
                { $substract: ["$$NOW", "$dataNascimento"] },
                { $multiply: [86400000, 365] }
            ]
         }
        }
    }
    },
    {
        $lookup: {
          from: 'vendas',
          localField: 'clienteId',
          foreignField: 'clienteId',
          as: 'compras'
        }
    },
    {
        $sort: {
          totalCompras: -1
        }
      },
      {
        $group: {
          _id: "$endereco.uf",
          totalCompras: {
            $sum: 1
          }
        }
      },
      {
        $sort: {
          totalCompras: -1
        }
      },
      { $limit: 5 }
]);

// Exercício 7

db.vendas.aggregate([
    {
  match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    {
  match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    {
  group: {
        _id: "$clienteId",
        totalConsumido: {
  sum: "$itens.quantidade"
        }
      }
    },
    {
  sort: { totalConsumido: -1 }
    },
    { $limit: 1 },
    {
  lookup: {
        from: 'clientes',
        localField: '_id',
        foreignField: 'clienteId',
        as: 'cliente'
      }
    },
    {
  project: {
        nomeCliente: "$cliente.nome",
        uf: "$cliente.endereco.uf",
        totalConsumido: "$totalConsumido",
        _id: 0
      }
    }
  ]);