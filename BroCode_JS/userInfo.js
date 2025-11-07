/* Accepting user input 
    -easy way: window prompt
    -professional way: html textbox


    Any non empty string has a value of true when converted to a boolean
    an empty string is false ""
        - can be used to check for an input using Boolean(input);
*/

//let username = window.prompt("What's your username");
//console.log(username);

let username;
let age;

document.getElementById("submitButton").onclick = function() {
    username = document.getElementById("usernameTextbox").value;
    document.getElementById("usernameTextbox").value = ``;

    age = Number(document.getElementById("ageTextbox").value);
    document.getElementById("ageTextbox").value = ``;
    
    
    document.getElementById("usernameOutput").textContent = `Username: ${username}`;
    document.getElementById("ageOutput").textContent = `Age: ${/*typeof*/ age}`;
}


const decreaseButton = document.getElementById("counterDecrease"); 
const resetButton = document.getElementById("counterReset"); 
const increaseButton = document.getElementById("counterIncrease");
const countLabel = document.getElementById("counterLabel");
let count = 0;

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = 0;
}
increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}