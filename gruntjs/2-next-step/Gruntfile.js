module.exports = function(grunt) {

    // initConfig() に渡すオブジェクトにタスクを追加していきます。
    grunt.initConfig({

        // pkg プロパティに package.json の内容インポートします。 <※1>
        pkg: grunt.file.readJSON('package.json'),

        // banner プロパティにテンプレートを埋め込みます
        banner: '/**\n'+
        '* Name: <%= pkg.name %>\n'+
        '* Version: <%= pkg.version %>\n'+
        '* Description: <%= pkg.description %>\n'+
        '* Date: <%= grunt.template.today("yyyy-mm-dd") %>\n'+
        '*/\n',

        // ファイル連結 タスクを定義します
        // ( タスクの名前 concat はプラグインに依存します
        concat: {

            options: {
                // バナーを追加します。<※2>
                banner: '<%= banner %>\n'
            },

            dist: {
                // foo.js と bar.js の ２つのファイルを連結します。
                src: ['foo.js', 'bar.js'],
                dest: 'main.js'
            }
        }

    });

    // タスクプラグインを読み込みます。
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default のタスクを定義します。
    grunt.registerTask('default', [ 'concat' ]);
};
