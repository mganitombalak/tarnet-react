function a() {
    function b() {
        return 1;
    }
    function b() {
        return 5;
    }
    return b();
}
alert(a());
// ----------------------------------------    5

function a() {
    var b = undefined;
    var b = undefined;
    b = function () {
        return 1;
    };
    return b();
    b = function () {
        return 5;
    };
}
alert(a());
// -----------------------------------------  1

alert(a());
function a() {
    var b= undefined; 
    var b= undefined;
    b = function () {
        return 1;
    };
    return b();
    b = function () {
        return 5;
    }
}
// -------------------------------------------- 1

function a() {
    var b = undefined;
    var b = undefined;
    return b(); // b is not a function
    b = function () {
        return 1;
    };
    b = function () {
        return 5;
    }
}
alert(a());
// -------------------------------------------- ERR