let textArea = document.querySelector("textArea")
let knapp = document.querySelector("#knapp")
let p_displaywords = document.querySelector("#displaywords")

knapp.addEventListener("click", countWords)

function countWords(){
    console.log("Kör funktionen countWords")
    let text = textArea.value
    console.log(text)
    let words = text.split(" ")
    console.log(words.length)
    p_displaywords.innerHTML = words.length
}