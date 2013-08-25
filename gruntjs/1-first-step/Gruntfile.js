module.exports = function(grunt) {

    // initConfig() に渡すオブジェクトにタスクを追加していきます。
    grunt.initConfig({

        // ファイル連結 タスクを定義します
        // ( タスクの名前 concat はプラグインに依存します
        concat: {
            dist: {
                // 1st.js と 2nd.js の ２つのファイルを連結します。
                src: ['1st.js', '2nd.js'],
                dest: 'main.js'
            }
        }

    });

    // タスクプラグインを読み込みます。
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default のタスクを定義します。
    grunt.registerTask('default', [ 'concat' ]);
};
