// let myName = "tanya     "
// let myChannel = "Coffee    "

// console.log(myName.truelength());


let myCartoons = ["Doraemon", "NinjaHattori"]

let cartoonPower = {
    Doraemon: "magicPocket",
    NinjaHattori: "DingDing",

    getNinjaPower: function(){
        console.log(`Ninja Power is ${this.NinjaHattori}`);
    }
}

Object.prototype.tanya = function(){
    console.log(`Tanya is present in all objects`);
}

Array.prototype.heyTanya = function(){
    console.log(`Tanya says hello`);
}

// cartoonPower.tanya()
// myCartoons.tanya()
// myCartoons.heyTanya()
// cartoonPower.heyTanya()




// INHERITANCE


const User = {
    name: "github",
    email: "github@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "GithubaurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tanya".trueLength()
"iceTea".trueLength()