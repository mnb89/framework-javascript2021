const trovaDispari = numero => numero%2!==0

const numeri = [4,7,5,4,2,8,9,9,2,1,3]

console.log(numeri)

let dispari=numeri.filter(trovaDispari)

console.log("trovaDispari con function expression",dispari)

dispari= numeri.filter(numero=>numero%2!==0)

console.log("trovaDispari con function anonima",dispari)

