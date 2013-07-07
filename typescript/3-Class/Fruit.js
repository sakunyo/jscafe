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
