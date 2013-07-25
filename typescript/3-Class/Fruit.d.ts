/**
* class, extends
* 出力される JavaScript コードは Classy なコード
* [private, public] [static]
*/
declare class MyClass {
    public x: number;
    private _x;
    constructor(x: number, _x: string);
    public myMethod(): number;
}
declare var myclass: MyClass;
declare class Fruit {
    public name: string;
    public color: string;
    constructor(name: string, color: string);
    private privateProp;
    public getFruitColor(): string;
}
declare class Banana extends Fruit {
    constructor();
}
declare var fruit: Fruit;
declare var banana: Banana;
