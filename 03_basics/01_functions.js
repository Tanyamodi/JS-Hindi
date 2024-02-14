
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

//sayMyName()    //--> execution of function


//jab function ki definition likhte hai, tab usko parameters kehte hai
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Tanya");
    return number1 + number2
    console.log("Tanya");
}

//jab function ko call krte hai, to usko arguments kehte hai
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanya"))
// console.log(loginUserMessage("tanya"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "tanya",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const  myNewArray = [200, 400, 100, 60]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

