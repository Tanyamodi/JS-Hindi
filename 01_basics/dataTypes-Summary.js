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

// Primitive DataTypes:
// Number=>number
// String=>string
// Boolean=>boolean
// null=>object
// undefined=>undefined
// Symbol=>symbol
// BigInt=>bigint

//Non-primitive DataTypes:
// Arrays=>object
// Function=>function
// Object=>object






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)


//Stack mein copy milta hai
let myname="tanyadelhi"

let anothername = myname
anothername = "tanya2021"

console.log(myname);
console.log(anothername);

//Heap mein reference pass hota hai
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanya@google.com"

console.log(userOne.email);
console.log(userTwo.email);