console.log("Hej hoj")

//kontaktering

let fornamn = "Elis"
let efternamn = "Norin"
let namn = fornamn + " " + efternamn
let adress = "Kronhusgatan 9"
let swish_nr = 070761
let alder = 17

console.log("namn: " + namn +"\n" + "adress: " + adress + "\n" + "swish nr:" + swish_nr + "\n" + "alder: " +alder)


let p_uppgifter = document.querySelector("#a1")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress: " + adress + "<br>" + "Swish nr:" + swish_nr + "<br>" + "Alder: " +alder


let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`antal bokstäver i alfabetet är ${antal_bokstaver}`)

//slice

//sökning

//split

//loopa över en lista