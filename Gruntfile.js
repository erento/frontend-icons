module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        options: {
          htmlDemo: true,
          destHtml: './dist/fonts',
          skip: require('os').platform() === 'win32',
          stylesheet: 'scss',
          startCodepoint: 0xE001,
          relativeFontPath: '/static/frontend-search/assets/fonts',
          template: './src/scss/_icons.scss',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon--',
            mixinPrefix: 'icon--'
          }
        },
        src: './src/icons/**/*.svg',
        dest: './dist/fonts',
        destCss: './dist/scss'
      }
    }

  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
