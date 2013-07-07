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
var varString = "String"; // 暗黙的に型を宣言
// varString = 123; // Error

var varString2:string = "String2"; // 型を明示

var varNumber = 123;
var varNumber2:number = 123;


/**
 * Array
 * 型を束縛しない any
 */
var varArray  = [ 1, 2, 3 ]; // 暗黙的に number[]

var varArray2 = [ 1, "2",
  { x:"string" }, function () {} ]; // 暗黙的に {}[]

var varArray3:any[] = [ 1, "2", function () {} ]; // 明示 any[]

/**
 * Object
 */
var varObject = { x:"x", y:123 };



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
