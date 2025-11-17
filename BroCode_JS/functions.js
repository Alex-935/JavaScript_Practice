/*
    callback = a function that is passed as an arguement to another function

    used to handle asynchronous operations
        - reading a file
        - network requests
        - interacting with databases

*/

//hello();
//goodbye(); goodby exectues first without a callback

hello(goodbye);

function hello(callback) {
    setTimeout(function() {
        console.log("Hello");
        callback();
    }, 3000);
    
}

function goodbye() {
    console.log("Goodbye");
}



sum(displayConsole, 13, 25);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}



/*
    forEach() = method used to iterate over the elements of an array
            and apply a specified function (callback) for each element

            array.forEach(callback)
                - provides element, index and array by default
*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element) {
    console.log(element);
}

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

fruits.forEach(display);


/*
    .map() = accepts a callback and applies the function to each element of an array
             returns a new array

             - provides element, index and array by default
*/

const myNumbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}

function upperCaseMap(element) {
    return element.toUpperCase();
}

const dates = ["2024-01-12", "2025-02-20", "2026-03-27"];

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);


/*
    .filter() = creates a new array by filtering out elements

*/

let moreNumbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = moreNumbers.filter(isEven);
console.log(evenNumbers);

function isEven(element) {
    return element % 2  === 0;
}

function returnTrue(element) {
    return true;
}
let trueNums = moreNumbers.filter(returnTrue);
console.log(trueNums);


/*
    reduce() = reduce the elements of an array into a single value
        - accumulator is the previous element
        - element is the next element
*/

const prices = [5, 4, 76, 33, 16, 26];

let total = prices.reduce(sumPrices);
console.log(`Total: $${total.toFixed(2)}`);

function sumPrices(accumulator, element) {
    return accumulator + element;
    // returns previous element + next element
    //first iteration is 0 + 5, and the returned value becomes the previous value in the next iteration 
}

const names = ["John", "F.", "Kennedy"];
let fullName = names.reduce(getFullName); 

function getFullName(accumulator, element) {
    return accumulator + ' ' + element;
}
console.log(fullName);


let maxNum = prices.reduce(getMax);

function getMax(accumulator, element) {
    return (accumulator > element) ? accumulator : element;
}
console.log(maxNum);



/*
    function declaration = define a reusable block of code that performs a specific task

        function hello() {
            console.log('hello');
        }

    function expressions = a way to define functions as values or variables

    used in: 
        - callbacks in asynchronous code
        - higher-order functions
        - closures
        - event listeners
*/ 
const sayHello = function() {
    console.log("Hello There");
}
sayHello();

//setTimeout(callback, time to wait in ms);
setTimeout(function() {console.log("Hi")}, 2000);

const myNums = [1,2,3,4,5,6,7,8];
const cubeNums = myNums.map(function(element) {
    return Math.pow(element, 3);
});
console.log(cubeNums);



/*
    Arrow functions = a consise way of writing expressions that is good for simple 
                    functions that you use only once
                    (parameters) => {}
*/

const myHello = () => console.log("hello");
myHello();

const newPrice = prices.map((element) => {
    return (element * 0.8).toFixed(2);
});
console.log(newPrice);