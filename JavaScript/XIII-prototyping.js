// function Person(firstName, lastName) {
//     this.name = firstName;
//     this.surname = lastName;
// }

// var p1 = new Person("Gani", "Tombalak");
// var p2 = new Person("Ersin", "Kilic");
// Person.prototype.getFullName = function () {
//     return `${this.name} ${this.surname}`;
// }
// p1.getFullName = function () {
//     return `${this.name} ${this.surname}`;
// }

// console.log(p1.getFullName());
//delete Person.prototype.getFullName;
// console.log(p2.getFullName());

function Person() { }

Person.prototype = {
    print: function () {
        console.log(this);
    }
}

var p = Object.create(Person.prototype);
p.print();






