const express = require('express')
const bodyParser = require('body-parser')
const cepRoutes = require('./routes/cepRoutes')
const errorMiddleware = require('../middlewares/error.js');

const app = express()
app.use(bodyParser.json())

app.use(cepRoutes)
app.use(express.json())

const PORT = 3003;

app.get('/ping', (_req, res) => {
    res.status(200).json({ message: 'pong!' });
})

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Servidor roda aqui -> ${PORT}`))