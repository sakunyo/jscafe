/**
 * MyTypes.ts
 *
 * User: sakuya sugo
 * Date: 2013-07-07
 */

class MyTypes {


  public myString:string;

  public myNumber:number;

  public myStrings:string[];

  public myNumbers:number[];

  public myArray:any[];

  public myObject:{
    x:string
    y:number
    z:{
      a:string[]
    }
  };

  constructor () {

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

}


var varString = "String";
var varString2:string = "String2";

var varNumber = 123;
var varNumber2:number = 123;

var varArray  = [1, 2, 3];
var varArray2 = [1, "2", 3];
var varArray3:any[] = [1, "2", function hoge() { /*snip*/ }];

var varObject = { x:"x", y:123 };



function getCanvasElement () {
  return document.createElement("canvas");
}
function getCanvasElementContext () {
  var canvas = getCanvasElement();
  return canvas.getContext("2d");
}






