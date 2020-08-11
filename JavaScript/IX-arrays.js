let arr = [
    1,
    2.6,
    false,
    {
        name: "Gani",
        surname: "Tombalak"
    },
    item => console.log(item),
    function(){
        console.log("Hello world");
    },
    "Nbr?"
];
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr);
// console.log(arr[4]);
// arr[4]("Hello from other side");

// let p = value => console.log(typeof value);
// arr.forEach(p);

let product = {
    id: 1,
    type: 0,
    price: 29.90,
    name:"Awesome Product",
    profit: function () {
        this.price = this.price * 1.1;
    }
}
// let p = key => console.log(`${key} => ${typeof product[key]}`);
// Object.keys(product).forEach(p);
let p = value => console.log(value);
arr.filter(item=> typeof item === 'function').forEach(p)