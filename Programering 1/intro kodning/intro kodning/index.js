

    // skapar en variabel som heter name och tilldelar värdet Elis.
    let name = "Elis" // string
    let age = 16 // heltal, int

    console.log(`Hej ${name} du är ${age} år gammal`)

    //If-sats - att göra val
    if (age >= 18){
        console.log("Du är vuxen")
    } else {
        console.log("ur a kiddo")
    }
    //DOM _ Document Object Model
    let text = document.querySelector("#text")
    text.innerHTML = `${name} är ${age} år gammal`

    //Skapar variabler för p-taggar
    let add = document.querySelector("#Addition")
    let sub = document.querySelector("#Subtraktion")
    let mult = document.querySelector("#Multiplikation")
    let div = document.querySelector("#Division")

    add.innerHTML = `Addition`
    sub.innerHTML = `Subtraktion`
    mult.innerHTML = `Multiplikatin`
    div.innerHTML = `Divition`

    let button = document.querySelector("#Knapp")

    button.addEventListener("click", math)

    function math(event){
        console.log("math-funktionen körs")

        let num1 = parseFloat(document.querySelector("#number1").value)
        let num2 = parseFloat(document.querySelector("#number2").value)


        add.innerHTML = `${num1}+${num2}=${num1+num2}`
        sub.innerHTML = `${num1}-${num2}=${num1-num2}`
        mult.innerHTML = `${num1}*${num2}=${num1*num2}`
        div.innerHTML = `${num1}/${num2}=${num1/num2}`
    }

