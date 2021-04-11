import Counter from './Counter.js' // indispensabile per importare un modulo
import CounterView from './CounterView.js'


let contatore = new Counter() // 0
contatore.increment() //1
contatore.increment() //2

console.log("Caso 01 - inizio da 0 senza limiti | + 2",contatore.value == 2);


contatore = new Counter(10) // 10
contatore.increment() // 11
contatore.increment() // 12

console.log("Caso 02 - inizio da 10 senza limiti | + 2",contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */

contatore = new Counter(10,10,15) //10
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log("Caso 03 - inizio da 10 max 15 min 10 | + 3",contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log("Caso 04 - inizio da 10 max 15 min 10 | +5",contatore.value == 15)


contatore = new Counter(10,8,13)
contatore.increment() // 11
contatore.increment() // 12
contatore.increment() // 13
contatore.increment() // 13
contatore.increment() // 13

console.log("Caso 05 - inizio da 10 max 13 min 8 | +5",contatore.value == 13)

contatore.decrement()   // 13
contatore.decrement()   // 12
contatore.decrement()   // 11
contatore.decrement()   // 10
contatore.decrement()   // 9
contatore.decrement()   // 8
contatore.decrement()   // 8
contatore.decrement()   // 8

console.log("Caso 06 - inizio da 10 max 13 min 8 | -8",contatore.value == 8)


contatore = new Counter(3,4)

console.log("Caso 07 - inizio da 3 min 4 | resetta il valore di inizio a 4",contatore.value == 4)

contatore = new Counter(25,null,10)

console.log("Caso 07 - inizio da 25 max 10 | resetta il valore di inizio a 10",contatore.value == 10)



// new CounterView('#counterA')
// new CounterView('#counterB')

