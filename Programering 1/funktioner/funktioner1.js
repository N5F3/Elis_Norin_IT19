let namn = "E mf Norin" // <--  globalt scope

function sayHello(){
    let alder = 16 // <--   lokal variabel endastsynlig i funktionen
    console.log(`Hej ${namn}`)
    console.log(`Min ålder är ${alder}, du är ${alder} år   gammal`)
}
//anropar funktion sayHello
sayHello()
sayHello()


function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`) 

function subtract(tal3, tal4){
    let summa = tal3-tal4
    return summa
}

console.log(`2-5=${subtract(2,5)}`) 

function multiplate(tal5, tal6){
    let summa = tal5*tal6
    return summa
}

console.log(`2*5=${multiplate(2,5)}`) 

function divide(tal7, tal8){
    let summa = tal7/tal8
  if (tal8 == 0) {console.log("Error 404")}
   else return summa
 
}

console.log(`2/5=${divide(2,23)}`) 