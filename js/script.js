// startig Var
let userAge, userKm, ticketPrice, discountP;
let messageDiscount = "hai diritto allo sconto";
const kmPrice = 0.21;
const message = "il prezzo dei tuo biglitto è"

// chiedi all'utente la sua età
userAge = parseInt ( prompt ("Quanti anni hai?") );
console.log( "user age = " + userAge );

// chiedi all'utente quanti chilometri deve percorrere
userKm = parseFloat ( prompt("Quanti km devi percorrere?") );
console.log("user km = " + userKm);

// calcola il prezzo del biglietto a seconda di qualti km deve fare
ticketPrice = userKm * kmPrice;
console.log("Ticket Price is " + ticketPrice + " euro");
// stampa il prezzo del biglietto
document.getElementById("price").innerHTML = ticketPrice;

// stampa all'utente se ha diritto a degli sconti e nel caso far vedere quando deve pagare

// controlla gli anni dell'utente 
// IF discount 20%
if (userAge<18)  {
  discountP = "20%";
  discount = ticketPrice * 0.20;
  ticketPrice = ticketPrice - discount.toFixed(2);
}

// ELSE IF discount 40%
else if(userAge>=65)  {
    discountP = "40%";
    discount = ticketPrice * 0.40;
    ticketPrice = ticketPrice - discount.toFixed(2);
}

// ELSE nothing discount 
else {
    messageDiscount = "non hai diritto a sconti"
    discountP = "";
} 

// Stamp massege discount
document.getElementById("discount").innerHTML = `${messageDiscount} ${discountP}`;

// stamp new price
document.getElementById("discount_price").innerHTML = "il prezzo del biglietto è " + ticketPrice + " euro";




// console.log("Ticket Price is " + ticketPrice + " euro");