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
}));

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpsonRepeat = simpsons.find(({id}) => id === req.body.id);

    if (!simpsonRepeat) {
      return res.status(409).json({ message: 'id already exists' });
    }    
    const newArray = [id, name];
    
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
    return res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
