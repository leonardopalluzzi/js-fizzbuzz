/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// inizializzare variabili
// creare ciclo for per i che va da 1 a 100 (100 incluso)
// calcolare il resto calcolare il resto
// scrivere condiozione per i multipli di 3 e stampare fizz
// scrivere condizione per i multipli di 5 e stampare buzz
// scrivere condizione per i multipli di 3 e 5 e stampare fizzbuzz

const n = 100;
let restThree;
let restFive;

 for (let i = 1; i <= n; i++){
    restThree = i % 3;
    restFive = i % 5;
    if (restThree == 0 && restFive == 0){
        console.log(`${i} FizzBuzz`);
    } else if (restFive == 0){
        console.log(`${i} Buzz`);  
    } else if (restThree == 0) {
        console.log(`${i} Fizz`);
    } else {
        console.log(i);
    }
 }