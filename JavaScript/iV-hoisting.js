//Hoisting
var fullName;

fullName = "Mehmet Gani Tombalak";
sayHello(fullName);

function sayHello(name) {
    console.log(`Hello, ${name}`);
}