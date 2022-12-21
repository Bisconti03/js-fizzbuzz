/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

1. Creiamo un ciclo, impostiamo il contatore(1), poi la condizione (<=100), e infine l'incremento (++)
2. Per tutti i numeri che sono divisibili(quindi danno resto 0) sia per 5 che per 3, in console dovrà spuntare la parola "fizzbuzz" {operazione svolta con un modulo = ((modulo1)&&(modulo2))}
3. Per tutti i numeri che sono divisibili(quindi danno resto 0) per 3, in console dovrà spuntare la parola "fizz" {operazione svolta con un modulo}
4. Per tutti i numeri che sono divisibili(quindi danno resto 0) per 5, in console dovrà spuntare la parola "buzz" {operazione svolta con un modulo}
5. Per tutti gli altri, in console dovrà spuntare il numero effettivo
6. Fine
*/




for (let i = 1; i <= 100; i++) {

    if ((i%5 == 0)&&(i%3 == 0)) {
        console.log("fizzbuzz");
    }

    else if (i%3 == 0) {
        console.log("fizz")
    }

    else if (i%5 == 0) {
        console.log("buzz")
    }    

    

    else {
        console.log(i)
    }
}