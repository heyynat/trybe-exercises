const cepModel = require('../models/cepModels');

const findAddressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cepModel)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cepModel = await cepModel.findAddressByCep(searchedCep);

  if (!cepModel) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cepModel;
};

module.exports = { findAddressByCep };
