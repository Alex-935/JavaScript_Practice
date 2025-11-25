/*
    EventListeners = Listen for specific events to create interactive web pages
                     events: keydown, keyup, keypress (keypress is not compatible with all web browsers)
                     .addEventListener(event, callback);

*/

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    console.log(`Key down: ${event.key}`);
});
document.addEventListener("keyup", event => {
    console.log(`Key up: ${event.key}`);
});


const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {

        event.preventDefault();

        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
document.addEventListener("keyup", event => {

});