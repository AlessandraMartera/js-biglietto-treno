// startig Var
let userAge, userKm, ticketPrice;
const kmPrice = 0.21;
// chiedi all'utente la sua età
userAge = parseInt ( prompt ("Quanti anni hai?") );
console.log( "user age = " + userAge );

// chiedi all'utente quanti chilometri deve percorrere
userKm = parseInt ( prompt("Quanti km devi percorrere?") );
console.log("user km = " + userKm);

// stampa all'utente il prezzo del biglietto a seconda di qualti km deve fare
ticketPrice = userKm * kmPrice;
console.log("Ticket Price is " + ticketPrice + " euro");

// stampa all'utente se ha diritto a degli sconti e nel caso far vedere quando deve pagare
// controlla gli anni dell'utente 
// SE minore di 18 allora 20% di sconto
// ALTRIMENTI SE maggiore di 65 allora 40% di sconto
// ALTRIMENTI nessuno sconto 