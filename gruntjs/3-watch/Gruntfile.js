/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    pkg: grunt.file.readJSON('package.json'),
    hostname: 'localhost',
    port: 3000,

    connect: {
      server: {
        options: {
          hostname: '<%= hostname %>',
          port: '<%= port %>'
        }
      }
    },
    open: {
      dev : {
        path: 'http://<%= hostname %>:<%= port %>',
        app: 'Safari'
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
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
	grunt.registerTask('start', ['less', 'open']);
  grunt.registerTask('default', ['connect', 'start', 'watch']);

};
