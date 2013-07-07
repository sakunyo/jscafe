var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* User: sakuya
* Date: 2013-07-07
*/
/**
* class, extends
* 出力される JavaScript コードは Classy なコード
* [private, public] [static]
*/
var MyClass = (function () {
    function MyClass(x, _x) {
        this.x = x;
        this._x = _x;
    }
    MyClass.prototype.myMethod = function () {
        return 123;
    };
    return MyClass;
})();

var myclass = new MyClass(10, "private value");

console.log(myclass.myMethod());
console.log(myclass.x);

// private を指定した場合には外側からアクセスするとError
// console.log( myclass._x ); // Error
var Fruit = (function () {
    function Fruit(name, color) {
        this.name = name;
        this.color = color;
        this.privateProp = "is Private";
    }
    Fruit.prototype.getFruitColor = function () {
        return this.name + ' is ' + this.color;
    };
    return Fruit;
})();

var Banana = (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        _super.call(this, "Banana", "Yello");
    }
    return Banana;
})(Fruit);

var fruit = new Fruit("Fruit", "Geen");
var banana = new Banana();

console.log(banana.getFruitColor());
//@ sourceMappingURL=Fruit.js.map
