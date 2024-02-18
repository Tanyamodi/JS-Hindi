const coding = ["js", "ruby", "java", "python", "cpp"]

//callback function -->
// 1. iska naam nhi hoga 
// 2. ye function array ke anadra chal raha hai to ye value parameter ki tarah value laayega

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array)=> {
//     console.log(item, index, array);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "jpython",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )