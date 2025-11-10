let username = "Bro Code";

username.charAt(0);
username.indexOf('o'); //returns first occurence only
username.lastIndexOf('o');

username.length;

username.trim(); //removes any whitespace before or after
username.toUpperCase();
username.toLowerCase();

username.repeat(3); //concatonates the string n times

username.startsWith('B');//Returns true/false
username.endsWith(' ');
username.includes("user");

username.replaceAll(" ", "_");
username.padStart(15, "_");// pad the string with _ until its 15 characters long
username.padEnd(15, "_");// pad the string with _ until its 15 characters long

username.slice(3, 6);
// no second index needed if going to the end of the string
console.log(username.slice(username.indexOf(" ")+1));
console.log(username.slice(-7, -1));
