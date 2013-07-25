/**
* User: sakuya sugo
* Date: 2013-07-07
*/
/**
* Function は Arguments と Return にTypeを指定できる
* Argus のオプションは v?:string
* Default Valueを設定する場合は v:string = “str” と ? を省略できる
*/
function hello(v) {
    if (typeof v === "undefined") { v = ""; }
    return "hello" + v;
}
console.log(hello());
console.log(hello("string"));

var myNumber = 100;

// console.log(hello(myNumber)); // Error
var myFunc = function () {
    // snip
    return 123;
};

// console.log(hello(myFunc)); //Error
var myObj = {};

// console.log(hello(myObj)); // Error
function myCallback(callback) {
    callback();
}
myCallback(function () {
});

// Return Void
function myVoid() {
}

// Executable Anonymous Function.
(function () {
    console.log("Executable Anonymous Function");
})();
//@ sourceMappingURL=hello.js.map
