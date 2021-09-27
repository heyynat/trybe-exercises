function infoPromise(param1, param2, param3) {
const promise = new Promise((resolve, reject) => {
    if (typeof param1 && typeof param2 && typeof param3 != "number") reject(new Error("Informe apenas números"));
    
    const resultado = ( (param1 + param2) * param3 );
    if (resultado < 50) reject(new Error("Valor muito baixo"));
    resolve(resultado)
});

return promise;
}

infoPromise(2, 1, 40)
.then(result => console.log(`${result}`))
.catch(err => console.log(`${err.message}`));