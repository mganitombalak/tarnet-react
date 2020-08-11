// function longRunning(f) {
//     setTimeout(() => f("Done!"), 5000);
// }

// let callBack = (result) => console.log(result);
// longRunning(callBack);
// console.log('Operation started.');

let logoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        status:true
    }), 5000);
    //setTimeout(() => reject("err!"), 5000);
});

logoutPromise
    .then(result =>{
        a();
        b();
        // x 8
    })
    .catch(err => console.log(`fail:${err}`));
    
function a(){
    console.log('a');
}
function b(){
    console.log('b');
}