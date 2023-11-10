/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Codice che fa 5 iterazioni
// Errore di sintassi > al posto di <


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(2));
// Aggiunge +5 se il numero è pari
// Errore sintassi === al posto di =

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
console.log(loopToFive());
// Itera fino a 5
// Errore di sintassi , al posto di ;


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
// Errori non serve il -1 non serve ; dopo i++, nella conzione === al posto di = / numbers[i] e ; dopo ) , return fuori dal loop
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]