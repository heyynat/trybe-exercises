const express = require('express')
const userRoutes = require('./userRoutes')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/user', userRoutes)


app.listen(PORT, () => console.log(`Servidor na porta: ${PORT}`))