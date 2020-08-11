// GENERATORS & ITERATORS

// Array
// String
// Map
// Set

var person = {
    name: "Gani",
    surname: "Tombalak",
    age: 38
};

// person[Symbol.iterator] = function* () {
//     yield this.name;
//     yield this.surname;
//     yield this.age;
// }

// for (var key in person) {
//     console.log(key);
// }

// for (let key of person) {
//     console.log(key)
// }
// console.log([...person]);

// function* topla(sayi){
//     yield sayi;
//     yield sayi+1;
//     yield sayi+2;
//     yield sayi+3;
// }

// let iterator= topla(0);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var arr =[
//     ["name","Gani"],
//     ["surname","Tombalak"],
//     ["age",38]
// ]

function* getObjectKeys(obj) {
    const reflectedProps = Reflect.ownKeys(obj);
    for (const propKey of reflectedProps) {
        yield [propKey, obj[propKey]];
    }
}

var arr = getObjectKeys(person);
for(let [key,value] of arr){
    console.log(`${key} = ${value}`)
}