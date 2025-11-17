
let fruits = ["apple", "orange", "banana"];

fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");//adds element to the beginning
fruits.shift();//removes element from the beginning

let numOfFruits = fruits.length;

fruits.indexOf("apple");
fruits.indexOf("carrot"); // returns -1 if not in array

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.sort();
fruits.sort().reverse();

/*
    Spread Operator = allows an interable such as an array or string
                    to be expanded into seperate elements (unpacks elements).


*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);//checks each element to find max

let username = "Bro Code";
let letters = [...username];
//outputs ['B', 'r', 'o'....etc]

let newNumbers = [...numbers];
//creates a copy of numbers

let numbers2 = [6, 7, 8, 9, 10];
let moreNums = [...numbers, ...numbers2];


/*
    Rest parameters = (...rest) allows a function work with a variable number
                    of arguements by bundling them into an array

                spread - expands an array into seperate elements
                rest - bundles seperate elements into an array
*/

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";

function getFood(...foods) {
    return foods;
}

const foods = getFood(food1, food2, food3);
//this becomes an array of foods

function sum(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(`The sum is: ${sum(11, 16, 28)}`);