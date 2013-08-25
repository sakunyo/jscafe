/*global module:false*/

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    pkg: grunt.file.readJSON('package.json'),
    hostname: 'localhost',
    port: 3000,

    connect: {
      options: {
        hostname: '<%= hostname %>',
        port: '<%= port %>'
      },
      proxies: [
        {
          context: '/api',
          host: '<%= hostname %>',
          port: 8888,
          https: false,
          changeOrigin: false
        }
      ],
      livereload: {
        options: {
          middleware: function (connect, options) {
            return [
              connect.static(options.base),
              proxySnippet
            ];
          }
        }
      }
    },
    less: {
      development: {
        files: {
          "style.css": "style.less"
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      less_files: {
        files: '*.less',
        tasks: ['less']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('start', ['less']);
  grunt.registerTask('default', ['configureProxies', 'connect:livereload', 'start', 'watch']);

};
