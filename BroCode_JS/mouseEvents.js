/*
    EventListeners = Listen for specific events to create interactive web pages
                     events: click, mouseover, mouseout
                     .addEventListener(event, callback);

*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch";
});
/*
function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Ouch";
}*/

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Click Me";
});

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "What Have You Done!?";
    myBox.fontSize = "20px";
});



const imgButton = document.getElementById("imgButton");
const myImg = document.getElementById("myImg");

imgButton.addEventListener("click", event => {

    if (imgButton.textContent == "Hide") {
        //myImg.style.display = "none";
        myImg.style.visibility = "hidden";
        imgButton.textContent = "Reveal";
    }
    else {
        //myImg.style.display = "inline";
        myImg.style.visibility = "visible";
        imgButton.textContent = "Hide";
    }
    
});