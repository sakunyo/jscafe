/**
 * User: sakuya sugo
 * Date: 2013-07-07
 */


// Option
function hello (v:string = ""):string {
  return "hello" + v;
  // return 123;
}

console.log(hello());
console.log(hello("string"));

var myNumber = 100;
// console.log(hello(myNumber));

var myFunc = () => {
  // snip
  return 123;
};
// console.log(hello(myFunc));

var myObj  = {};
// console.log(hello(myObj));




// Callback Function Return Type.
function myCallback (callback:() => any) {
  callback();
}



// Return Void
function myVoid ():void {
}



// Executable Anonymous Function.
(() => {
  console.log("Executable Anonymous Function")
})();

