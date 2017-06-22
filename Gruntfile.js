module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'compile-handlebars': {
            info: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html', '!**/partials/**'],
                    dest: 'out/'
                }],
                helpers: ['handlebars-helpers', 'src/helpers/title.js'],
                partials: ['src/posts/*.md', 'src/partials/*.html'],
                templateData: 'src/data/**/*.json'
            }
        },
        copy: {
            assets: {
                expand: true,
                cwd: 'src/assets',
                src: '**',
                dest: 'out/assets'
            },
            mapauthors: {
                src: "src/stattrack/overcast/mapauthors.txt",
                dest: "out/stattrack/overcast/mapauthors.txt"
            },
            downloads: {
                src: "src/mapstack/downloads.txt",
                dest: "out/mapstack/downloads.txt"
            }
        },
        clean: ['out/']
    });
    
    var handlebars = require('handlebars');
    var helpers = require('handlebars-helpers')({
      handlebars: handlebars
    });
    
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['compile-handlebars', 'copy']);
}
