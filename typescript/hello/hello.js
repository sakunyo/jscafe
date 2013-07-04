/**
* hello
*
* @param v {?string}
* @returns {string}
*/
function hello(v) {
    return (v || "") + "hello";
}

console.log(hello());

console.log(hello("string"));

var myNumber = 100;

// console.log(hello(myNumber));
var myFunc = function () {
};

// console.log(hello(myFunc));
var myObj = {};
//@ sourceMappingURL=hello.js.map
