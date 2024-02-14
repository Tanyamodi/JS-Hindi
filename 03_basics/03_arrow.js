const user = {
    username: "tanya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "tanya"
//     console.log(this);
// }

// chai()


// const chai = function (){
//     let username = "tanya"
//     console.log(this.username);
// }

const chai = () => {
    let username = "tanya"
    console.log(this.username);
}

// chai()

//Explicit return --> jisme return likhna padta hai
// const addTwo = (num1, num2) => {
//     return num1 + num2; 
// }

//Implicit return --> jisme return keyword nhi likhte
// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ( {username: "tanya"} )  //object return krne ke liye usko curly braces mein wrap krna hi padta hai

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()