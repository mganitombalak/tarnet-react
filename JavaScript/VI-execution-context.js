//EXECUTION CONTEXT & FUNCTION STACK

var fullName = "Mehmet Gani Tombalak";
console.log(fullName);
console.log(this);

function a() {
    var fullName = "Volkan Burcak";
    console.log(`a():${fullName}`);
    console.log(`a():${this.fullName}`);
    console.log(this);
    b(fullName);
}
function b(name) {
    console.log(`b():${fullName}`);
    console.log(`b(): ${name}`);
    console.log(this);
    c();
}

function c (){
    console.log(`c():${fullName}`);
}

a();
console.log("Done");