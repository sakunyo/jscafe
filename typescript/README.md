# TypeScript

型を守ってSAFEコーディング


## Agenda
* TypeScript
    * Welcome to TypeScript
* Any IDE and More Editor
    * Visual Studio 2012
    * JetBrains
    * nodejs
    * Sublime Text $70
    * Vim
* WebStorm And TypeScript
* まとめ
    * メリット
    * デメリット
    * 参考


## 自己紹介
さらっと



## TypeScript

### Welcome to TypeScript
Microsoftがオープンソースとして公開  
altJS の 型付け特化のコンパイラ  
2012年に登場し、現在 (2013-07-01の時点では) v0.9

* TypeScript  
[http://www.typescriptlang.org/](http://www.typescriptlang.org/)  
[https://npmjs.org/package/typescript](https://npmjs.org/package/typescript)

* WEB DB PRESS Vol.75 に TypeScript が取り上げられています  
[http://gihyo.jp/magazine/wdpress/archive/2013/vol75](http://gihyo.jp/magazine/wdpress/archive/2013/vol75)

* TypeScript Quick Guide
[http://phyzkit.net/typescript/](http://phyzkit.net/typescript/)


CoffeeScript の文法は融通がきく反面  
人によって書き方違いも多く一貫性は保ちにくい  
コンパイルされたコードは読み辛い傾向

CoffeeScript という"言語"



### 2012年のWEB業界キーワード
* Github
* Pull Request
* マサカリ族
* Jenkins
* CI (継続的インテグレーション : Continuous Integration)

開発環境を見直す時期に入ってきた(導入し始めた)。


#### フロントエンドは？
* Grunt
* AngularJS
* BackboneJS
* UnderScoreJS
* Bower
* Yeoman
* CreateJS
* JavaScript Test Framework
	* Jasmine
	* JsTestDriver
	* QUnit
	* mocha
	* Testem

コードが複雑になり、それに応じて開発環境も複雑になってきた


### 2013年はフロントエンドにも『型』
JavaScript の型って好いようにやってくれるじゃん？  
JavaScript の魅力ってゆるさでしょ

とはいえ、

* 開発が複雑になり、みんなでコードに手を入れる事が多くなった
* 複雑で 1ヶ月前のコードとか覚えてないし
* 知らない人のコードを保守する事になった
* 良く分からないけどテストは通ってる
* 仕様書どこだっけ
* etc...

どうやら他人事じゃなくなってきた。


## Any IDE and More Editor
おすすめは WebStorm
でも Nodejs があれば好きな
エディタで始められる


### Visual Studio 2012  
* for Windows 7
* for Windows 8

Visual Studio Express 2012 for Web  
[http://www.microsoft.com/en-us/download/details.aspx?id=34790](http://www.microsoft.com/en-us/download/details.aspx?id=34790)


### JetBrains (おすすめ)
* WebStorm $49
* PhpStorm $99

Windows, OSX, Linux のマルチプラットフォーム  
0.8対応 (2013-07-05) JetBrains は更新頻度が高い  
プロダクトなのですぐ対応する可能性が高い


### nodejs
grunt-typescript
[https://npmjs.org/package/grunt-typescript](https://npmjs.org/package/grunt-typescript)


### Sublime Text $70
### Vim
nodejs のコンパイラで環境を手に入れる

* TypeScript support for Sublime Text  
TypeScript support for Emacs  
TypeScript support for Vim  
[http://blogs.msdn.com/b/interoperability/archive/2012/10/01/sublime-text-vi-emacs-typescript-enabled.aspx](http://blogs.msdn.com/b/interoperability/archive/2012/10/01/sublime-text-vi-emacs-typescript-enabled.aspx)

* [https://github.com/leafgarland/typescript-vim](https://github.com/leafgarland/typescript-vim)


## WebStorm で使う
hogeStorm のアナライズ凄いです


* コンパイルのオプション
* ts ファイルの watch 便利
* watch の設定


### tsc options

	npm install -g typescript



	Version 0.9.0.1
	Syntax:   tsc [options] [file ..]

	Examples: tsc hello.ts
			  tsc --out foo.js foo.ts
			  tsc @args.txt

	Options:
	  -c, --comments              Emit comments to output
	*  -d, --declaration           Generates corresponding .d.ts file
	*  -b, --disallowbool          Throw error for use of deprecated "bool" type
	*  -m, --disallowimportmodule  Throw error for use of deprecated "module" keyword when referencing an external module. Only allow "require" keyword.
	  -e, --exec                  Execute the script after compilation
	  -h, --help                  Print this message
	  --module KIND               Specify module code generation: "commonjs" (default) or "amd"
	  --nolib                     Do not include a default lib.d.ts with global declarations
	  --out FILE|DIRECTORY        Concatenate and emit output to single file | Redirect output structure to the directory
	  --sourcemap                 Generates corresponding .map file
	  --target VER                Specify ECMAScript target version: "ES3" (default), or "ES5"
	  -v, --version               Print the compiler's version: 0.9.0.1
	  -w, --watch                 Watch input files
	  @<file>                     Insert command line options and files from a file.


## まとめ
### メリット
* CoffeeScript とは違い、普通の JavaScript の記述に近いので導入しやすい

* Visual Studio 2012 (+ TypeScript for Visual Studio 2012 アドオン)  
もしくは、JetBrains 社 の IDE WebStorm や PhpStorm でもそのまま使えます。

* CUI で作っている場合も nodejs があれば大丈夫。

* CoffeeScript の出力した 生js ファイル汚くありませんか？  
TypeScript はそんなことはありません。 

* 有名なJavaScriptライブラリ の 宣言ファイル沢山あります!  
[https://github.com/borisyankov/DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped)


### デメリット
* コードが冗長になりやすい

* CoffeeScript などとは違い便利な構文などは少ないので
素のJavaScript を書くイメージ

* JavaScript フレームワーク や、今まで作ったコード資産を導入するには手間がかかる  
=> 既存のコードは書き直してまで移行しなくても良い場面の方が多いと思います。

* 元のコードが CoffeeScript なんだけど... 諦めましょう




### 参考
* TypeScript ドキュメント  
[http://typescript.codeplex.com/](http://typescript.codeplex.com/)

* TypeScript + SourceMap でデバッグしてみる  
[http://yaakaito.org/blog/2013/03/28/typescript-with-sorucemap/](http://yaakaito.org/blog/2013/03/28/typescript-with-sorucemap/)

* TypeScriptのAPIドキュメントをyuidocjsで自動生成  
[http://straitwalk.hatenablog.com/entry/2013/06/22/022909](http://straitwalk.hatenablog.com/entry/2013/06/22/022909)

* borisyankov/DefinitelyTyped  
[https://github.com/borisyankov/DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped)






## キャプチャ

<style type="text/css">
.img-halfsize img { max-width:520px; height:auto; }
</style>
<div class="img-halfsize">
<img src="./_pic/ws_arguments_type_invalid.png" alt="">
<img src="./_pic/ws_file_watch.png" alt="">
<img src="./_pic/ws_files_outputs__js_and_maps.png" alt="">
<img src="./_pic/ws_project_setting__file_watchers.png" alt="">
</div>














<script type="text/javascript">
(function(d, l){
  console.log(1);
  l.setAttribute('rel',  'stylesheet');
  l.setAttribute('href', 'http://szk-engineering.com/markdown.css');
  d.querySelector('head').appendChild(l);
})(d = document, d.createElement('link'));
</script>
