// Primitive 

// 7 Types: String, Number, Boolean, null, undefined, Symbol, Bigint
//JS is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 689739819879127879281n


// Reference (Non primitive)

// Array, Objects, Functions

const cartoons = ["doaremon", "kiteretsu", "ninjaHattori"];
let myObj={
    name:"tanya",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof cartoons);

// https://262.ecma-international.org/5.1/#sec-11.4.3