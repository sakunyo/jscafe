/**
* User: sakuya
* Date: 2013-07-07
*/
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
