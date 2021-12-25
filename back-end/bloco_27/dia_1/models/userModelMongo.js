const connection = require('./mongodbConnection')

const getAllcharacters = async () => {
  return connection().then((db) => db.collection('characters').find().toArray());
}

const insertcharacter = async (firstName, lastName, email, password) => {
  connection()
    .then((db) => db.collection('characters').insertOne({ firstName, lastName, email, password }))
    .then((result) => {id: result.insertedId, firstName, lastName, email, password});
}

const verifyPassword = async (password) => {
    if(!password || password >= 6) {
        connection()
        .then((password) => password >= 6?)
    }
} 

module.exports = {
  getAllcharacters,
  insertcharacter
}
