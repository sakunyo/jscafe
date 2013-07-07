/**
* Type は大きく分けて、Primitive TypeとObject Type
*
* Primitive Types
* [string, number, boolean, void, null, undefined, Enum ...]
*
* var 宣言した値などは暗黙的に型が決まる
* 他の型の値を代入できない
*/
declare var varString: string;
declare var varString2: string;
declare var varNumber: number;
declare var varNumber2: number;
/**
* Array
* 型を束縛しない any
*/
declare var varArray: number[];
declare var varArray2: {}[];
declare var varArray3: any[];
/**
* Object
*/
declare var varObject: {
    x: string;
    y: number;
};
declare class MyTypes {
    public myString: string;
    public myNumber: number;
    public myStrings: string[];
    public myNumbers: number[];
    public myArray: any[];
    public myObject: {
        x: string;
        y: number;
        z: {
            a: string[];
        };
    };
    constructor();
}
