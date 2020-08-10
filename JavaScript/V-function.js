//FUNCTION
// FUNCTION STATEMENT / FUNCTION EXPRESSION

// FUNCTION STATEMENT
// sayHello();
// console.log(sayHello);
// function sayHello() {
//     console.log('Hello');
// }
// console.log('=======================');
// //FUNCTION EXPRESSION
// console.log('Before');
// console.log(sayHi);
// {
//     var sayHi = function () {
//         console.log('Hi');
//     }
// }
// console.log('After');
// console.log(sayHi);
// sayHi();
// console.log('==========================')


// ARGUMENT & SPREAD
function greeting(name,...other){
    console.log(arguments.length);
    console.log(`Hello ${name}`);
    other.forEach(item => console.log(item));
    // Arrow Functions
    // Fat Arrow Functions
    // Lambda Expression 
}
greeting();
greeting("Mehmet","Gani","Tombalak","Antalya");