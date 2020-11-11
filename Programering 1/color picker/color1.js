let colorPicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "cyan"

colorPicker.addEventListener("change", colorChanger)

function colorChanger(event){
    let color = event.target.value;
    console.log(color)
if (color == "none") {
    rektangel.style.backgroundColor = "none"   
}
if (color == "red") {
    rektangel.style.backgroundColor = "red"   
}
if (color == "geen") {
    rektangel.style.backgroundColor = "grön"   
}
if (color == "cyan") {
    rektangel.style.backgroundColor = "cyan"   
}
if (color == "blue") {
    rektangel.style.backgroundColor = "blue"   
}

