function a() {
    function b() {
        return 1;
    }
    return b();
    function b() {
        return 5;
    }
}
alert(a());
// ----------------------------------------    5
function a() {
    var b = function () {
        return 1;
    };
    return b();
    var b = function () {
        return 5;
    };
}
alert(a);
// -----------------------------------------  1

alert(a());
function a() {
    var b = function () {
        return 1;
    };
    return b();
    var b = function () {
        return 5;
    }
}
// -------------------------------------------- 1

function a() {
    return b();
    var b = function () {
        return 1;
    };
    var b = function () {
        return 5;
    }
}
alert(a());
// -------------------------------------------- ERR