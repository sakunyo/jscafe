/**
* User: sakuya sugo
* Date: 2013-07-07
*/
// Option
function hello(v) {
    if (typeof v === "undefined") { v = ""; }
    return "hello" + v;
}

console.log(hello());
console.log(hello("string"));

var myNumber = 100;

// console.log(hello(myNumber));
var myFunc = function () {
    // snip
    return 123;
};

// console.log(hello(myFunc));
var myObj = {};

// console.log(hello(myObj));
// Callback Function Return Type.
function myCallback(callback) {
    callback();
}

// Return Void
function myVoid() {
}

// Executable Anonymous Function.
(function () {
    console.log("Executable Anonymous Function");
})();
//@ sourceMappingURL=hello.js.map
