module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'compile-handlebars': {
			info: {
				files: [{
					src: 'src/info.html',
					dest: 'out/info.html'
				}],
				partials: ['src/partials/header.html', 'src/partials/footer.html'],
				templateData: 'src/data/info.json'
			}
		},
		clean: ['out/']
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['compile-handlebars']);
}
