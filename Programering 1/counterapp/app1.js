let p_siffra = document.querySelector("#siffra")
let upp = document.querySelector("#uppknapp")
let ned = document.querySelector("#nedknapp")
let reset = document.querySelector("#resetknapp")

let siffra = 0; // ändra vid knapptryckningar
p_siffra.innerHTML = siffra;

upp.addEventListener("click", raknaUpp);
ned.addEventListener("click", raknaNed);
reset.addEventListener("click", resetF);

function raknaUpp()
{
    // öka värdet på siffra
    siffra = siffra + 1; 

    // skriv ut den i p_siffra
    p_siffra.innerHTML = siffra;
}

function raknaNed()
{
    // öka värdet på siffra
    siffra = siffra - 1; 

    // skriv ut den i p_siffra
    p_siffra.innerHTML = siffra;
}

function resetF()
{
    siffra = 0;
    p_siffra.innerHTML = siffra;
}