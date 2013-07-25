/**
* Interface
* オブジェクトの持っている特徴を抽象化したもの
* クラス以外にも適用できる
* 慣例的に IMyInterface のように I を接頭辞にする
*/
interface IFruit {
    name: string;
    isRipe: boolean;
    color?: string;
}
declare class Banana implements IFruit {
    public name: string;
    public isRipe: boolean;
    constructor(configs: any);
    public eat(): string;
    public color: string;
}
declare var nonClassyFruitObject: IFruit;
