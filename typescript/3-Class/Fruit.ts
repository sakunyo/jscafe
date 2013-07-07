/**
 * User: sakuya
 * Date: 2013-07-07
 */


class Fruit {

  constructor(public name:string, public color:string) {

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
