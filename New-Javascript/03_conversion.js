let score1 = 33
let score2 = "Ten"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = false

console.log(typeof score1);
console.log(typeof(score1));

console.log(typeof score2);
console.log(typeof(score2));

console.log(typeof score3);
console.log(typeof(score3));

console.log(typeof score4);
console.log(typeof(score4));

console.log(typeof score5);
console.log(typeof(score5));

console.log(typeof score6);
console.log(typeof(score6));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);

let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6);

console.log(valueInNumber1);
console.log(valueInNumber2);
console.log(valueInNumber3);
console.log(valueInNumber4);
console.log(valueInNumber5);
console.log(valueInNumber6);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn1 = 1
let isLoggedIn2 = 0
let isLoggedIn3 = ""
let isLoggedIn4 = "HK"

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)

console.log(booleanIsLoggedIn1);
console.log(booleanIsLoggedIn2);
console.log(booleanIsLoggedIn3);
console.log(booleanIsLoggedIn4);

// 1 => true; 0 => false
// "" => false
// "HK" => true

let someNumber = 27
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);