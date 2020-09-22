console.log("Hej detta är if_sats lektion2")


/* Skriv ett program som låter användaren mata in sin ålder.
 Programmet ska avgöra om personen får kolla på en 15-årsgräns film på bio */

/* Utöka programmet till att kolla om användaren får titta på en 7-årsgräns film på bio*/

/* Utöka programmet till att kolla om användaren får titta på en 18-årsgräns film på bio */

let age = prompt("Ange ålder!")
if (age >= 18){
    console.log("Du får se film upp till arton år!")
}
else if (age >= 15){
    console.log("Du får se film upp till femton år!")
}
else if (age >= 7){
    console.log("Du får se film upp till sju år!")
}
else {
    console.log ("du får inte se film")
}


console.log("Programmet fortsätter här")

//uppgift
/* en enkelbiljett: 30kr 
ett månadskort 775kr
Fråga användara hur ofta den åker och bestämm bästa kortet!*/

