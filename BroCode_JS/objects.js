/*
    object = a collection of related properties and/or methods
            can represent real world objects (people, products, places)
*/

const anakin = {
    
    firstName: "Anakin",
    surName: "Skywalker",
    saberColor: "Blue",
    onCouncil: true,
    rankOfMaster: false,

    hello: function() {console.log(`Hello, I'm ${this.firstName}.`);},
    introduction: () => console.log("I don't like sand. It's coarse and rough and irritating, and gets everywhere"),
}

anakin.hello();

// this = reference to the object where THIS is used
// constructor = special method for defining the properties and methods of objects
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = () => console.log(`You drive the ${this.model}`);
}
const car1 = new Car("Ford", "Mustang", 2024);

/*
    classes = provide a more structured way to work with objects compared to the traditional constructor functions
*/

class Product{ 

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    vat() {
        return (this.price - (this.price/1.2)).toFixed(2);
    }
}

const product1 = new Product("Shirt", 14.99);
const product2 = new Product("Jeans", 12.50);
product1.displayProduct();
console.log(product1.vat());


/*
    Static = keyword that defines properties or methods that belong to a class itself,
            rather than the objects created from that class. 
*/

class MathUtil{
    static PI = 3.141592

    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getCircumference(5));

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}


//inheritance = allows a new class to inherit properties and methods from an existing class
             

class Animal {
    alive = true;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`This ${this.name} is eating.`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} mph.`)
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} is running`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    name = "fish";

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    run() {
        console.log(`This ${this.name} is swimming`);
        super.move(this.runSpeed);
    }
}
class Hawk extends Animal{
    name = "Hawk";

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flightSpeed = flySpeed;
    }

    run() {
        console.log(`This ${this.name} is flying`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();



/*
        getter = special method that makes a property readable
        setter = special method that makes a property writable
            They validate and modify a value when reading/writing a property
*/

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else{
            console.error(`Width must be a positive number.`);
        }
    }

    get width() {
        return this._width.toFixed(1);
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error(`Height must be a positive number`);
        }
    }

    get height() {
        return this._height.toFixed(1);
    }

    //we can access a value that technically doesnt exist
    get area() {
        return `Area: ${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

//const rectangle = new Rectangle(-10, 'apple');
const rectangle = new Rectangle(2, 3);
console.log(rectangle.area);


class Person{

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }

    get lastName(){
        return this._lastName;
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person("Ben", "Kenobi", 64);
console.log(person.fullName);



/*
    destructuring = extract values from arrays and objects, then assign them to variables
                    [] = to perform array destructuring
                    {} = to perform object destructuring
*/

//  --------------------EXAMPLE 1---------------------
//  Swap the value of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a + " " + b);



//  --------------------EXAMPLE 2---------------------
//  Swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);



//  --------------------EXAMPLE 3---------------------
//  Assign array elements to variables
const colors2 = ["red", "green", "blue", "black", "white"];
const [color1, color2, color3, ...extraColors] = colors2;
console.log(color1 + " " + color2 + " " + color3);
console.log(extraColors);



//  --------------------EXAMPLE 4---------------------
//  Swap the value of two variables
const person1 = {
    firstName1: "Spongebob",
    lastName1: "Squarepants",
    age1: 30,
    job1: "Fry Cook"
}
const person2 = {
    firstName2: "Patrick",
    lastName2: "Star",
    age2: 34
}
const {firstName1, lastName1, age1, job1} = person1;
console.log(firstName1 + " " + lastName1 + " " + age1 + " " + job1);

const {firstName2, lastName2, age2, job2 = "unemployed"} = person2;
console.log(firstName2 + " " + lastName2 + " " + age2 + " " + job2);



//  --------------------EXAMPLE 5---------------------
//  Destructure in function parameters

function displayPerson({firstName1, lastName1, age1, job1="unemployed"}) {
    console.log(`Name: ${firstName1} ${lastName1}`);
    console.log(`Age: ${age1}`);
    console.log(`Job: ${job1}`);
}

displayPerson(person1);
displayPerson(person2);



/*
    nested objects = objects inside of other obects.
                    allows you to represent more complex data structures 
                    child object is enclosed by a parent object

                    Person {Address{}, ContactInfo{}}
                    ShoppingCart{Keyboard{}, Mouse{}, Moniter{}}
*/
const myPerson = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "Cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "International Waters"
    }
}
console.log(myPerson.address);
console.log(myPerson.address.street);

for (const property in person.address) {   
    console.log(person.address[property]);
}


class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class AnotherPerson {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age
        this.address = new Address(...address);
    }
}
const anotherPerson = new AnotherPerson("Spongebob Squarepants", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
console.log(anotherPerson.address);



// Array of objects
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);
fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.pop();
fruits.splice(1, 2);

fruits.forEach((fruit) => {
    console.log(fruit.name);
});

const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);



/*
    sort() = method used to sort the elements of an array in place.
            sorts elements as strings in lexicographic order, not alphabetical
            lexicographic = (alphabet, numbers, symbols) as strings
*/

let numbers = [1, 7, 4, 8, 3, 5, 2, 9, 10, 6];
numbers.sort();

console.log(numbers);// [1, 10, 2, 3, 4, 5, 6, 7, 8, 9];
//each item is treated as a string.
// lexicographically 10 comes before 2 because it starts with 1

numbers.sort((a, b) => a - b );// array sorted by returned value so now numbers in order
// use b - a for reverse order
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

people.sort((a, b) => {
    return a.age - b.age;
});  
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));//localeCompare compares lexicographically
console.log(people);


// Shuffle and array
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//cards.sort(() => Math.random() - 0.5);
//this is not a good way to shuffle as the shuffle isnt uniform and very inefficient for large arrays

shuffle(cards);
//Fisher-Yates Algorithm
function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}
console.log(cards);



// Date Objects
const date = new Date();
console.log(date);
// Constructor: Date(year, month, day, hour, minute, second, ms)
const myDate = new Date(2024, 0, 1, 2, 3, 4, 5);
// = new Date("2024-01-02T12:00:00Z");
// = new Date(0); you can enter an amount of milliseconds sinse a preset date (the epic date);
console.log(myDate);

const year = date.getFullYear();//2025
//.getMonth(), day = date.getDate();, .getHours(), .getMinutes(), .getSeconds(), .getDay();
// getDate() gives the day number, .getDay gives weekday e.g Mon

//to set a time, replace above methods with se3t instead of get. .setFullYear() etc

if (date > myDate) {
    console.log("As Expected");
}




// closure = a function defined inside of another function,
//           the inner function has access to the variables 
//           and scope of the outer function.
//           Allows for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue and Angular

function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}
outer();
//this keeps message private as its in the outer scope

function oldIncrement() {
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}
//if we called oldIncrement, it would never go beyond 1 as count is reset every time


function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {
        increment,// returns an object with a method of increment
        getCount
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
// count is maintained across uses of increment
// counter.count is undefined so it cannot have its valuse changed outside of increment
console.log(counter.getCount());

function createGame() {
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(10);
console.log(game.getScore());



// setTimeout() = function in JavaScript that allows you to schedule the execution
//                of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on workload of the runtime env.)
// aetTimeout(callback, delay);

const timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);
clearTimeout(timeoutId);

let myTimeoutId;
function startTimer() {
    myTimeoutId = setTimeout(() => {window.alert("Hi")}, 3000);
}

function clearTimer() {
    clearTimeout(myTimeoutId);
}

