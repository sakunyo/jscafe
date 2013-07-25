/**
* Function は Arguments と Return にTypeを指定できる
* Argus のオプションは v?:string
* Default Valueを設定する場合は v:string = “str” と ? を省略できる
*/
declare function hello(v?: string): string;
declare var myNumber: number;
declare var myFunc: () => number;
declare var myObj: {};
declare function myCallback(callback: () => any): void;
declare function myVoid(): void;
