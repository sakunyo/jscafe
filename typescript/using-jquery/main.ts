/// <reference path="./jquery.d.ts" />


class Animal {
  private name :string;

  constructor (v: string = "Cat") {
    this.name = v;
  }

  public defaults = {
    name: "hoge"
  };
  cry (v?: string) :string {
    return this.name + v;
  }
}



/*
class B {
  constructor (configs: { home: string; piyo: number; fuga?: number; }) {
    return configs;
  }
}



var b = new B({ home: "hoge", piyo: 9 });




(() => {

  var hoge = "hoge";

  console.log(jQuery());

  var $ = jQuery;

  $("hoge")

})();
*/
