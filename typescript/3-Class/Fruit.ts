/**
 * User: sakuya
 * Date: 2013-07-07
 */


/**
 * class, extends
 * 出力される JavaScript コードは Classy なコード
 * [private, public] [static]
 */
class MyClass {
  constructor ( public x:number, private _x:string ) { }
  public myMethod ():number { return 123; }
}

var myclass = new MyClass(10, "private value");

console.log( myclass.myMethod() );
console.log( myclass.x );

// private を指定した場合には外側からアクセスするとError
// console.log( myclass._x ); // Error



class Fruit {

  constructor (public name:string, public color:string) {
  }

  private privateProp:string = "is Private";

  getFruitColor ():string {
    return this.name + ' is ' + this.color;
  }

}



class Banana extends Fruit {
  constructor () {
    super( "Banana", "Yello" );
  }
}


var fruit  = new Fruit("Fruit", "Geen");
var banana = new Banana();


console.log( banana.getFruitColor() );
