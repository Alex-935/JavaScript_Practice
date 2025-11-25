/*
    DOM = DOCUMENT OBJECT MODEL
          Object{} that represents the page you see in the browser
                and provides you with an API to interact with it.
          Web browser constructs the DOM when it loads an HTML document,
            and structures all the elements in a tree-like representation.
          JavaScript can access all the DOM to dynamically change the content,
            structure, and style of the web page
*/

//console.log(document);  displays html
//console.dir(document); displays all domucment's properties
            // these properties can be accessed like a normal object  e.g, document.title



/*
    element selectors = Methods used to target and manipulate HTML elements
                        They allow you to select one or multiple HTML elements from the DOM

    1. document.getElementById()          - ELEMENT or NULL
    2. document.getElementByClassName()   - HTML COLLECTION
    3. document.getElementByTagName()     - HTML COLLECTION 
    4. document.querySelector()           - ELEMENT or NULL
    5. document.quertSelectorAll()        - NODELIST    

*/

const myHeading = document.getElementById('myHeading');
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = 'purple';

for (let fruit of fruits) {
    fruit.style.fontWeight = "bold";
}

Array.from(fruits).forEach((fruit) => {
    fruit.style.color = "green";
});



const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "grey";
Array.from(liElements).forEach((vegetable) => {
    vegetable.style.backgroundColor = "lightgreen";
});


//only selects first instance
const element = document.querySelector(".fruits");
element.style.color = "white";

const veggies = document.querySelectorAll(".veggies");

// this does have a built in forEach method
veggies.forEach((veg) => {
    veg.style.color = "pink";
});



/*
    DOM Navigation = The process of navigating through the structure of an HTML document using JS

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// .firstElementChild
const myElement = document.getElementById("myFruits");
const firstChild = myElement.firstElementChild;
firstChild.style.backgroundColor = "red";

// .lastElementChild
const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
    const firstChild = ulElement.lastElementChild;
    firstChild.style.backgroundColor = "yellow";
});


// .nextElementSibling
const anotherElement = document.getElementById("apple");
const nextSibling = anotherElement.nextElementSibling;
nextSibling.style.color = "white";

const anotherElement2 = document.getElementById("myFruits");
const nextSibling2 = anotherElement2.nextElementSibling;
nextSibling2.style.backgroundColor = "orange";


// .parentElement
const furtherElement = document.getElementById("cake");
const parent = furtherElement.parentElement;
parent.style.color = "purple";

// .children
const furtherElement2 = document.getElementById("desserts");
const children = furtherElement2.children;

Array.from(children).forEach((child) => {
    child.style.backgroundColor = "lightblue";
});

children[0].textContent += " is a lie. Don't listen to...";




/*
    Example 1 <h1>
        
        1. Create an Element
        2. Add Attribues/Properties
        3. Append Element to DOM
        4. Remove HTML Element    
*/

//create element
const newH1 = document.createElement("h1");

//add attributes/properties
newH1.textContent = "I like Pizza!";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//append to DOM
//document.body.append(newH1);// this element is the last child
//document.body.prepend(newH1); // becomes first child
document.getElementById("box1").append(newH1);
//document.getElementById("box2").prepend(newH1);
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

//document.body.insertBefore(newH1, box1);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes);

//document.body.removeChild(newH1);
//document.box1.removeChild(newH1);


// 1.
const newListItem = document.createElement("li");
//2.
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
//3.
//document.getElementById("grape").append(newListItem);
document.getElementById("moreFruits").insertBefore(newListItem, document.getElementById("grape"));


const listItems = document.querySelectorAll("#moreFruits li");
document.getElementById("moreFruits").insertBefore(newListItem, listItems[0]);