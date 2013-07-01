* TypeScript + SourceMap でデバッグしてみる
http://yaakaito.org/blog/2013/03/28/typescript-with-sorucemap/

* TypeScriptのAPIドキュメントをyuidocjsで自動生成
http://straitwalk.hatenablog.com/entry/2013/06/22/022909


ファイル構成

	.
	├── hello
	│   ├── hello.d.ts
	│   ├── hello.js
	│   ├── hello.js.map
	│   ├── hello.ts
	│   └── helloSpec.js
	└── testem.json



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



<img src="./_pic/ws_arguments_type_invalid.png" alt="">

<img src="./_pic/ws_file_watch.png" alt="">

<img src="./_pic/ws_files_outputs__js_and_maps.png" alt="">

<img src="./_pic/ws_project_setting__file_watchers.png" alt="">

<img src="./_pic/ws_support_typescript.png" alt="">
