module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsonlint: {

            jshintStyle: {
                src: [ 'src/data/**/*.json' ],
                options: {
                    formatter: 'prose',
                    reporter: 'jshint'
                }
            }

        },
        'compile-handlebars': {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html', '!**/partials/**'],
                    dest: 'out/'
                }],
                helpers: ['handlebars-helpers', 'src/helpers/*.js'],
                partials: ['src/posts/*.md', 'src/partials/**/*.html'],
                templateData: 'src/data/**/*.json',
                globals: ['src/data/global.json']
            },
            downloads: {
                files: [{
                    src: 'src/partials/maps.js',
                    dest: 'out/assets/js/maps.js'
                }],
                templateData: 'src/data/maps/overcast.json'
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
                src: "src/stats/overcast/mapauthors.txt",
                dest: "out/stats/overcast/mapauthors.txt"
            }
        },
        clean: ['out/']
    });
    
    var handlebars = require('handlebars');
    var helpers = require('handlebars-helpers')({
      handlebars: handlebars
    });
    
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jsonlint', 'compile-handlebars', 'copy']);
}
