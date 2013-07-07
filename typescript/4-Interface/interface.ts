/**
 *
 *
 * User: sakuya sugo
 * Date: 2013-07-07
 */


/**
 * Interface
 * オブジェクトの持っている特徴を抽象化したもの
 * クラス以外にも適用できる
 * 慣例的に IMyInterface のように I を接頭辞にする
 */
interface IFruit {
  name:   string;  // フルーツ名
  isRipe: boolean; // フルーツは食べごろか？
  color?: string;  // フルーツの色
}



class Banana implements IFruit {

  public name:string;
  public isRipe:boolean;

  constructor (configs:any) {
    this.name  = configs.name;
    this.isRipe = !!configs.isRipe;
  }

  public eat () { return "eat"; }

  public color:string = "Yello";
}



// IFruit の性質をもっている
var nonClassyFruitObject:IFruit = {
  name:   "nonClassyFruitObject",
  isRipe: true,
  eat:    function () { return "eat" }
};

