// LITERAL OBJECT & FUNCTIONS & FIRST CLASS OBJECT

// LITERAL OBJECT
var myObj = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () {
        console.log(this);
        return `${this.name} ${this.surname}`;
    }
    // getFullName: () => {
    //     console.log(this);
    //     return `${this.name} ${this.surname}`}
}
// console.log(this);
// console.log(myObj.name);
// console.log(myObj.surname);
// console.log(myObj.getFullName);
// console.log(myObj.getFullName());

// PROTOTYPING

// KEY:VALUE 
// console.log(myObj['name']);
// console.log(myObj['surname']);
// console.log(myObj['getFullName']);
// console.log(myObj['getFullName']());


//ES 5 FIRST CLASS OBJECTS
function person(firstName, lastName) {
    this.name = firstName;
    this.surname = lastName;
    // this.getFullName=function(){
    //     return `${this.name} ${this.surname}`;
    // };
    this.getFullName = () => `${this.name} ${this.surname}`;
}

// var p1 = new person("Gani","Tombalak");
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.getFullName);
// console.log(p1.getFullName());

// var p2 = new person("Harun","Mesci");
// console.log(p2.name);
// console.log(p2.surname);
// console.log(p2.getFullName);
// console.log(p2.getFullName());


// ES 6

class Person {
    constructor(firstName, lastName) {
        this.name = firstName;
        this.surname = lastName;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

var p3 = new Person("gani", "tombalak");
var p4 = new Person("Ersin", "Kilic");

// console.log(p3.getFullName());
// console.log(p4.getFullName());


// SAMPLE QUESTION

var mySecondObject = {
    name: "My Second Object",
    print: function () {
        console.log(this); //1. MSO
        this.name = "My Second Object is touched";
        console.log(this);//2. MSO
        var update = function (value) {
            console.log(this);//3. UPDATE
            this.name = value;
        };
        update("My Second Object is touched twice");
        console.log(this);//4. MSO
    }
}
// mySecondObject.print();

// console.log(0.2 + 0.1 == 0.3);
// console.log(0.2 + 0.1); 