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
				helpers: 'src/helpers/title.js',
				partials: ['src/partials/header.html', 'src/partials/footer.html', 'src/partials/alert.html', 'src/partials/map.html'],
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
			}
		},
		clean: ['out/']
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['compile-handlebars', 'copy']);
}
