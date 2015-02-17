module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      moveAngular:{
        src:"bower_components/angular/angular.js",
        dest:"_build/angular.js"
      }
    },
    uglify:{
       options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '_build/angular.js',
        dest: '_build/angular.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['copy', 'uglify']);

};