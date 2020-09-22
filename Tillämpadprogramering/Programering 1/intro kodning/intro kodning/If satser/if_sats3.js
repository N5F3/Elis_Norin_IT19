//uppgift
/* en enkelbiljett: 30kr 
ett månadskort 775kr
Fråga användara hur ofta den åker och bestämm bästa kortet!*/

let tal = prompt("Hur många resor planerar du?")

if (tal <= 25) {
    console.log("köp enkelbiljetter! Pris")
}

else if (tal >=26) {
    console.log("Köp månads kort!")
}