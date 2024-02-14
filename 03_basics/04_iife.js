//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//jab bhi do iife ek saath likhte hai, we have to put a semicolon at the end of one iife so that we don't encounter any error

( (name) => {
    //simple IIFE or we can say it as unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )('tanya') //here parameters are also passed

