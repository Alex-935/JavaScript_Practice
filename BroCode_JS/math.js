const PI = Math.PI;
const E = Math.E;

let x = 3.21;
xx = Math.round(x);
xxx = Math.floor(x);// or Math.ceil(x);
xxxx = Math.trunc(x);//eliminates decimal portion
xxxxx = Math.pow(x, 3);
xxxxxx = Math.sqrt(9);
xxxxxxx = Math.log(x);
//Math.sin(), cos(), tan()
//Math.abs() for absolute value
//Math.sign()  - returns -1, 0 or 1
//Math.max(x, y, z);  - or min()


let randomNum = Math.random(); // Gives random number between 0 and 1
console.log(randomNum);

let randomDice = Math.floor(Math.random() * 6) + 1;//multiplying by 6 gives a number between 0 and 5.
console.log(`Your dice roll is: ${randomDice}`);

const min = 50;
const max = 100;
//random number between two numbers
let randomBound = Math.floor(Math.random() * (max - min)) + min;
console.log(`Number between ${min} & ${max}: ${randomBound}`);



document.getElementById("diceRoller").onclick = function() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceRollLabel").textContent = diceRoll;
};