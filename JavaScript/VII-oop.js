// LITERAL OBJECT & FUNCTIONS & FIRST CLASS OBJECT

// LITERAL OBJECT
var myObj = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () {
        console.log(this);
        return `${this.name} ${this.surname}`;
    }
}
// console.log(this);
// console.log(myObj.name);
// console.log(myObj.surname);
// console.log(myObj.getFullName);
// console.log(myObj.getFullName());

// PROTOTYPING

// KEY:VALUE 
console.log(myObj['name']);
console.log(myObj['surname']);
console.log(myObj['getFullName']);
console.log(myObj['getFullName']());


//ES 5 FIRST CLASS OBJECTS
