// startig Var
let userAge, userKm, ticketPrice, message;
const kmPrice = 0.21;

message = "Il prezzo del tuo biglietto è";
// chiedi all'utente la sua età
userAge = parseInt ( prompt ("Quanti anni hai?") );
console.log( "user age = " + userAge );

// chiedi all'utente quanti chilometri deve percorrere
userKm = parseInt ( prompt("Quanti km devi percorrere?") );
console.log("user km = " + userKm);

// calcola il prezzo del biglietto a seconda di qualti km deve fare
ticketPrice = userKm * kmPrice;
console.log("Ticket Price is " + ticketPrice + " euro");

// stampa il prezzo del biglietto
document.getElementById("price").innerHTML = `${message} ${ticketPrice}`;

// stampa all'utente se ha diritto a degli sconti e nel caso far vedere quando deve pagare

// controlla gli anni dell'utente 
// SE minore di 18 allora 20% di sconto
if (userAge<18)  {
  let discount = ticketPrice * 0.20;
  ticketPrice = ticketPrice - discount.toFixed(2);
  document.getElementById("discount").innerHTML = "in base alla tua hai diritto alo sconto del 20%";
  document.getElementById("discount_price").innerHTML = "il nuovo prezzo del biglietto è " + ticketPrice + " euro";
  console.log("New Ticket Price is " + ticketPrice + " euro");
}
// ALTRIMENTI SE maggiore di 65 allora 40% di sconto
else if(userAge>=65)  {
    let discount = ticketPrice * 0.40;
    ticketPrice = ticketPrice - discount.toFixed(2);
    document.getElementById("discount").innerHTML = "in base alla tua hai diritto alo sconto del 40%";
    document.getElementById("discount_price").innerHTML = "il nuovo prezzo del biglietto è " + ticketPrice + " euro";
    console.log("New Ticket Price is " + ticketPrice + " euro");
}
// ALTRIMENTI nessuno sconto 
else {
    document.getElementById("discount").innerHTML = "in base alla tua età non hai diritto a sconti";
}