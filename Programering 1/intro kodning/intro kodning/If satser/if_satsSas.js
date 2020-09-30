let talkg = prompt("Hur mycket väger ditt bagage? (kg)")
let talL = prompt("Vad är längden på ditt bagage? (cm)")
let talB = prompt("Vad är Bredden på ditt bagage? (cm)")
let talH = prompt("Vad är höjden på ditt bagage? (cm)")

if (talkg < 8.00001 && talL < 55.00001 && talB < 40.00001 && talH < 23.00001){
    console.log("Ditt bagage är okej ombord!")
} else {
    console.log("Ditt bagage är aldelles för stort")
}