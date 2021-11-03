const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const signUp = require('./signUp');

app.use('/', signUp);


app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });