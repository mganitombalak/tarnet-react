// IIFE - IMMEDIATELY INVOKED FUNCTUION EXPRESSIONS

var fullName = "Mehmet Gani Tombalak";

// function sayHiInformal(name) {
//     console.log(`Hi ${name}`);
// }

// sayHiInformal(fullName);

// var SayHiInformal = name => console.log(`Hi ${name}`);
// SayHiInformal("Gani")

(name => console.log(`Hi ${name}`))("Gani");

(function (name) {
    console.log(`Hi ${name}`);
})("Adem");