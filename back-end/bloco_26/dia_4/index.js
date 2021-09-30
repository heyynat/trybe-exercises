const express = require('express');
const bodyParser = require('body-parser');

const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

const app = express();

app.get('/ping', function (req, res) {
    res.status(200).json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

app.post('/greetings', (req, res) => {
  const { nome, idade } = req.body;

  if (parseInt(idade, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ "name": `${nome}`, "age": `${idade}` });
});

app.put('/usuario/:nome/:idade', function (req, res) {
  const { nome, idade } = req.body;
  res.status(200).json({ "message": `Seu nome é ${nome} e você tem ${idade} anos de idade` })
});

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}))

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
