var Banana = (function () {
    function Banana(configs) {
        this.color = "Yello";
        this.name = configs.name;
        this.isRipe = !!configs.isRipe;
    }
    Banana.prototype.eat = function () {
        return "eat";
    };
    return Banana;
})();

// IFruit の性質をもっている
var nonClassyFruitObject = {
    name: "nonClassyFruitObject",
    isRipe: true,
    eat: function () {
        return "eat";
    }
};
//@ sourceMappingURL=interface.js.map
