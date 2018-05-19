module.exports = function(grunt) {

	//project configurations
	grunt.initConfig({

		cssmin : {
			target : {
				src : "./public/style/home_page.css",
				dest : "./build/static/css/home.min.css"
			}
		}

	});

	//load cssmin plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//create default task
	grunt.registerTask("default", ["cssmin"]);

};
