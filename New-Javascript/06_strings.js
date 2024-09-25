const name = "Hardik"
const repoCount = 50

// console.log(name + repoCount + " Value"); 

// console.log(`Hello my name is ${name} and my rep count is ${repoCount}`); // More reliable way to concatinate string

// String Declaration :

const gameName = new String('Watch-Dogs 2')

// Accesing Key value pairs & prototype :

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// Using Objects: 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4) // negative value cannot be given, if give it ignores and start from 0 
console.log(newString);

const anotherString = gameName.slice(-12,3) // can give negative value it starts from the negative value
console.log(anotherString);

const newStringOne = "   Hardik   "
console.log(newStringOne);
console.log(newStringOne.trim()); // Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://hardik.com/hardik%20kapoor"
console.log(url.replace('%20','-'));
console.log(url.includes('hardik'));

console.log(gameName.split('-')); // Split a string into substrings using the specified separator and return them as an array.