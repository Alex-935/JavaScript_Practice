/*
    JSON = JavaScript Object Notation - Data-interchange format
           Used for exchanging data between a server and a web application
           JSON files {key:value} OR [value1, value2, value3]

           JSON.stringify() = converts a JS object to a JSON string.
           JSON.parse() = converts a JSON string to a JS object.
*/

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names);

console.log(names);
console.log(jsonString);



const person = {"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]};

const jsonPersonString = JSON.stringify(person);

console.log(person);
console.log(jsonPersonString);



const people = [{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}];

const jsonPeopleString = JSON.stringify(people);

console.log(people);
console.log(jsonPeopleString);



/*
    parse
*/
console.log("------------------------------------------")
console.log("")
console.log("------------------------------------------")


const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const parsedNames = JSON.parse(jsonNames);
const parsedPerson = JSON.parse(jsonPerson);
const parsedPeople = JSON.parse(jsonPeople);

console.log(jsonNames);
console.log(parsedNames);
console.log(jsonPerson);
console.log(parsedPerson);
console.log(jsonPeople);
console.log(parsedPeople);


//fetch
// fetch and .json() both return promises

fetch("person.json").then(response => response.json())
                    .then(value => console.log(value));

fetch("people.json").then(response => response.json())
                    .then(values => values.forEach(value => console.log(value)))
                    .catch(error => console.error(error));