/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// inizializzare variabili
// creare ciclo for per i che va da 1 a 100 (100 incluso)
// calcolare il resto calcolare il resto
// scrivere condiozione per i multipli di 3 e stampare fizz
// scrivere condizione per i multipli di 5 e stampare buzz
// scrivere condizione per i multipli di 3 e 5 e stampare fizzbuzz

// variables declaration
const n = 100;
let restThree;
let restFive;

// for loop
 for (let i = 1; i <= n; i++){
    // rest calc
    restThree = i % 3;
    restFive = i % 5;
    // rest check
    if (restThree == 0 && restFive == 0) {
        // multiples of three and five
        console.log(`${i} FizzBuzz`);
    } else if (restFive == 0) {
        // multiples of five
        console.log(`${i} Buzz`);  
    } else if (restThree == 0) {
        // multiples of three
        console.log(`${i} Fizz`);
    } else {
        // not mutiple
        console.log(i);
    }
 }