/**
* MyTypes.ts
*
* User: sakuya sugo
* Date: 2013-07-07
*/
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
declare var varString: string;
declare var varString2: string;
declare var varNumber: number;
declare var varNumber2: number;
declare var varArray: number[];
declare var varArray2: {}[];
declare var varArray3: any[];
declare var varObject: {
    x: string;
    y: number;
};
declare function getCanvasElement(): HTMLCanvasElement;
declare function getCanvasElementContext(): CanvasRenderingContext2D;
