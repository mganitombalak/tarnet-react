// CALL BIND APPLY

var person = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    }
};
var person2 = {
    name: "Ersin",
    surname: "Kilic"
}
var saySomething = function (something) {
    console.log(this);
    console.log(`${something} ${this.getFullName()}`);
}

//saySomething("Hello");
// BIND
// var f = saySomething.bind(person);
// f("Hiiiii");


// CALL vs APPLY

// console.log(person.getFullName());
// console.log(person2.getFullName());
console.log(person.getFullName.call(person2));

saySomething.call(person,"hello");
// saySomething.call(person2,"hi");

saySomething.apply(person,["Hi"]);