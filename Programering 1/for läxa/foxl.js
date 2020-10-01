let p_jamn = document.querySelector("#jamn")
let p_udda = document.querySelector("#udda")
let p_lekt = document.querySelector("#lekt")



p_jamn.innerHTML = "Jämna tal från 0 till 100: "
p_udda.innerHTML = "udda tal från 0 till 100: "
p_lekt.innerHTML = "Mina lektioner är:" 

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