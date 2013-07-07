/**
* MyTypes.ts
*
* User: sakuya sugo
* Date: 2013-07-07
*/
/**
* Type は大きく分けて、Primitive TypeとObject Type
*
* Primitive Types
* [string, number, boolean, void, null, undefined, Enum ...]
*
* var 宣言した値などは暗黙的に型が決まる
* 他の型の値を代入できない
*/
var varString = "String";

// varString = 123; // Error
var varString2 = "String2";

var varNumber = 123;
var varNumber2 = 123;

/**
* Array
* 型を束縛しない any
*/
var varArray = [1, 2, 3];

var varArray2 = [
    1,
    "2",
    { x: "string" },
    function () {
    }
];

var varArray3 = [1, "2", function () {
    }];

/**
* Object
*/
var varObject = { x: "x", y: 123 };

var MyTypes = (function () {
    function MyTypes() {
        // this.myString = 123; // Error
        this.myString = "String";

        // this.myNumber = []; // Error
        this.myNumber = 123;

        this.myStrings = ["Banana", "Orange"];
        this.myNumbers = [1, 2, 3];

        // Mixed Array
        this.myArray = [
            "string",
            123,
            { x: "x" },
            function inArray() {
                return "";
            }
        ];

        return this;
    }
    return MyTypes;
})();
//@ sourceMappingURL=MyTypes.js.map
