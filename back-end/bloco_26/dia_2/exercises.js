// Com Promises
function infoPromise(param1, param2, param3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof param1 !== "number" || typeof param2 !== "number" || typeof param3 !== "number") reject(new Error("Informe apenas números"));
    
    const resultado = ( (param1 + param2) * param3 );
    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado)
  });
  
  return promise;
}

infoPromise(2, 1, 40)
.then(result => console.log(`${result}`))
.catch(err => console.log(`${err.message}`));

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callInfoPromise() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  infoPromise(...randomNumbers)
  .then(result => console.log(`${result}`))
  .catch(err => console.log(`${err.message}`));
}

callInfoPromise();

// Com Async/Await
async function infoAsyncAwait(){
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  const result = await infoPromise(...randomNumbers)    
  try {
  } catch (err) {
    console.error(err);
  }
  return result;
}

infoAsyncAwait();

// Lendo Arquivos
const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

function readFileTest() {
  return fs.readFile(nomeDoArquivo, 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((data) => {
    data.forEach(({id, name}) => console.log(`${id} - ${name}`));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });
}

readFileTest();

async function getById(getId) {
  const simpsons = await fs.readFile(nomeDoArquivo, 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  const simpsonResult = simpsons.find(({id}) => id === getId)
  if (!simpsonResult) {
    throw new Error('id não encontrado');
  }
  console.log(`${simpsonResult.id} - ${simpsonResult.name}`);
}
getById("2");

async function alterFile() {
  const simpsons = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));
  
  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}
alterFile();
