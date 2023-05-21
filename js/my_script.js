//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.




let userNumber = parseInt(prompt("Insert 4 numbers.Please!"));
if (!(999 < userNumber && userNumber <= 9999)) {
   userNumber = parseInt(prompt(" Please insert 4 number"));
}


let sum = 0;
for (let x = 0 ; x < userNumber.toString().length; x++) {
sum += parseInt(userNumber.toString().charAt(x));
   
}
 console.log(sum);

 