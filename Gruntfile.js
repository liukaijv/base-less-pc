/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.    
    less: {
      development: {
        options: {
          // compress: true,
          paths: ["less"]
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: 'html.zip'
        },
        files: [       
          {expand: true, cwd: './', src: ['*.html','css/**', 'images/**', 'js/**'], dest: '', filter: 'isFile'}       
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task.
  grunt.registerTask('default', ['less']);
  grunt.registerTask('zip', ['less', 'compress']);

};
