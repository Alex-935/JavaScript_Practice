
/*
    NodeList = static collection of HTML elements by (id, class, element)
               Can be creatd by using QuerySelectorAll()
               Similar to an array, but no (map, filter, reduce)
               NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// Add HTML/CSS Properties
buttons.forEach(element => {
    element.style.backgroundColor = "green";
    element.textContent += "!";
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.textContent);
    });
});

buttons.forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 70%)";
    });

    element.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });
});



//Add an element

const newButton = document.createElement("button");
// add attributes
newButton.textContent = "Button 5!";
newButton.classList = "myButtons";//classList when working with element class

document.body.appendChild(newButton);

console.log(buttons);//only shows 4 buttons as it wont automatically update.

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);// now has all 5


//remove Element
buttons.forEach(element => {
    element.addEventListener("click", event => {
        event.target.remove();//removes from DOM/webpage but not nodeList
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});