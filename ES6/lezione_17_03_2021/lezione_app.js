/**
const è una variabile ma al contrario di un var
non si può ne ridichiarare ne riasseegnare.
*/

const saluto = "ciao";
const colori = []; //array

// il metodo push permettere di aggiungere un valore all'array
colori.push('red','blue');
colori.push('green','yellow');

console.log(colori);
//permette di mostrare nella console il contenuto dell'array colori

// let è invece una variabile che si può riassegnare ma non ridichiarare
let numeri = [1,2,3,4];

console.log(numeri);

numeri = "uno due tre";

console.log(numeri);

/*-------------------------------------------------------------*/


const num = [0,1,2,3,4,5,6,7,8,9]
// risultato 2,4,6,8...

console.log(num)

// function standard
const num2= num.map(function(numero){
    //console.log("indice:",index,"valore iniziale:", numero,"risultato: ", numero*2,);
    return numero*2
})

// console.log(num2)

// console.log(num2.length)


// arrow function standard
// const perDueArray= num.map( (numero) => {
//     return numero*2
// })
// console.log(perDueArray)


// arrow function con un solo argomento nella callback posso omettere le parentesi tonde
// const perDueArray= num.map(numero => {
//     return numero*2
// })
// console.log(perDueArray)


// arrow function contratta al massimo, valida solo se la funzione contiene una sola riga di codice
const perDueArray= num.map(numero => numero*2)
console.log(perDueArray)


/*
queste tre sono funzioni quasi equivalenti


let sum = (a,b) => a+b // function expression ES6

let sum = function(a,b) { // function expression ES5
    return a +b
}

function sum(a,b){
    return a+b
}

*/

const quadropari= num.map(numero => numero*numero).filter(n => n%2 === 0)
console.log(quadropari)