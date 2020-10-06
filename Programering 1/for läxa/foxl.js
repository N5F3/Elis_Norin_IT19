let p_jamn = document.querySelector("#jamn")
let p_udda = document.querySelector("#udda")
let p_lekt = document.querySelector("#lekt")
let p_sve = document.querySelector("#sve")
let p_prog = document.querySelector("#prog")
let p_matte = document.querySelector("#matte")
let p_idr = document.querySelector("#idr")
let p_eng = document.querySelector("#eng")

p_jamn.innerHTML = "Jämna tal från 0 till 100: "
p_udda.innerHTML = "udda tal från 0 till 100: "
p_lekt.innerHTML = "Mina lektioner är:"  
p_sve.innerHTML = "1. Svenska"
p_eng.innerHTML = "2. Engelska"
p_prog.innerHTML = "3. Programmering"
p_matte.innerHTML = "4. Mattematik"
p_idr.innerHTML = "5. Idrott"

for (let a=0; a<=100; a++)  {
    p_jamn.innerHTML += `${a} `
print(a)
a++
}

for (let b=1; b<=100; b++)  {
    p_udda.innerHTML += `${b} `
print(b)
b++
}