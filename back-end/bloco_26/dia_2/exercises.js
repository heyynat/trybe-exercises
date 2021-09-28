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
