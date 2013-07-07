/**
* MyTypes.ts
*
* User: sakuya sugo
* Date: 2013-07-07
*/
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

var varString = "String";
var varString2 = "String2";

var varNumber = 123;
var varNumber2 = 123;

var varArray = [1, 2, 3];
var varArray2 = [1, "2", 3];
var varArray3 = [1, "2", function hoge() {
    }];

var varObject = { x: "x", y: 123 };

function getCanvasElement() {
    return document.createElement("canvas");
}
function getCanvasElementContext() {
    var canvas = getCanvasElement();
    return canvas.getContext("2d");
}
//@ sourceMappingURL=MyTypes.js.map
