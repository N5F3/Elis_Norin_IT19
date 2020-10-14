console.log("Hej")
let h1_titel = document.querySelector("#titel");

let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")



// skriv while-sats i titel
h1_titel.innerHTML = "While-sats"


let n = 1

while (n <= 10){
    p_talserie1.innerHTML += `${n} `
    n+=3 // n ökas med 1
}

let m = 10

while (m >= -10){
    p_talserie2.innerHTML += `${m} `
    m-=1 // n ökas med 1
}