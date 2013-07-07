/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    typescript: {
      base: {
        src: ['typescript/**/*.ts'],
        dest: 'src',
        options: {
          base_path: 'src',
          sourcemap: true,
          comments: true,
          declaration: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task.
  grunt.registerTask('default', ['typescript']);

};
