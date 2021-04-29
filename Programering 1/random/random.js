console.log("Random hej")
let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin flip: ${coinflip}`)

if (
    coinflip == 1
){console.log("You got Tails")}
else {console.log("You got Heads")}

let dice = Math.floor(Math.random() * 7);
console.log(`You rolled a dice and got ${dice}`)

for (let i = 0; i <100; i++){
    let dice = Math.floor(Math.random() * 7);

    console.log(`You rolled a dice and got ${dice}`)
}