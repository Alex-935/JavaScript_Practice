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
    veg.style.color = "blue";
});