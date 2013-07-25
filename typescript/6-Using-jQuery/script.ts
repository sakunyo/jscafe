/**
 * Require Declaration file
 *   jquery.d.ts
 */
/// <reference path="./jquery.d.ts" />


/**
 * DOM へのアクセスはビルトインされている
 * declaration ファイルによってアクセス可能になっている
 */
//  Return HTMLCanvasElement;
function getCanvasElement () {
  return document.createElement("canvas");
}

//  Return CanvasRenderingContext2D;
function getCanvasElementContext () {
  var canvas = getCanvasElement();
  return canvas.getContext("2d");
}



// jQuery などのライブラリを使う場合 は declaration を読み込む
var $divs = jQuery(".div"), i:number, iz:number;

console.log(jQuery);
console.log($divs.length);

for (i = 0, iz = $divs.length; i < iz; i++) {
  console.log($divs[i]);
  $($divs[i]).text("string");
}

// 主要なライブラリの宣言ファイルが集まる borisyankov/DefinitelyTyped
// https://github.com/borisyankov/DefinitelyTyped


