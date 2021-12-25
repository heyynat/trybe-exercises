const router = require('express').Router();
const Cep = require('../controllers/cep');

router.get('/cep/:cep', Cep.findAddressByCep);

module.exports = router;
