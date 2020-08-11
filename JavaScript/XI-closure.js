// CLOSURE

// CURRYING
function saySomething(something) {
    return function (name) {
        console.log(`${something} ${name}`);
    }
}
let f = saySomething("Hello");
f("Gani");
// saySomething("Hi")("Gani");
// console.log(typeof f);
// let topla = num1 => num2 => num1 + num2;
// console.log(topla(1)(3));

function generateFunctionArray() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push(
            ((value)=>() => console.log(value))(i)
            );
    }
    return arr;
}


var farr = generateFunctionArray();
farr[0]();
farr[1]();
farr[2]();
farr[3]();
farr[4]();