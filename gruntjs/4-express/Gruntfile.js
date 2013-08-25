/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    express: {
      server: {
        options: {
          script: 'app.js'
        }
      }
    },
    watch: {
      express: {
        files: [ 'app.js', 'routes/**/*.js' ],
        tasks: [ 'express:server' ],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');


  // Default task.
  grunt.registerTask('default', ['express', 'watch']);

};
