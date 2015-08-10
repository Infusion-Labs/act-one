module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'jade:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
