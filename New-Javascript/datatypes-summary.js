// Types Of Datatypes :

// #1 Primitive 
// 7 Types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const name = "Hardik"  // String
const score = 100 // Number
const scoreValue = 100.33 // Number
const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail; let userEmail2 = undefined // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

console.log(id === anotherId); 
const bigNumber = 3456543576654356754n // BigInt

// #2 Reference (Non-primitive)
// 3 Types : Array,Objects,Functions

const supercars = ["Buggati","Ferrari","Lamborgini","Porsche","BMW","Mercedes","Konisegg"]; // Array

let myObj = {
    
    name: "Hardik",
    age: 21,

} // Object

const myFunction = function() {
    console.log("Hello World");
} // Function

console.log(typeof bigNumber);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/