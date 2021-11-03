const connection = require('./mysqlConnection')


const validateCep = (cep) => {
  const cepRegex = /\d{5}-\d{3}/;
  
  if (cepRegex.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: validateCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;

  return getNewCep(result);
};

module.exports = {
  findAddressByCep,
};
