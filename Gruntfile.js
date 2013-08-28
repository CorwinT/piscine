'use strict';
module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
	jasmine: {
      base: {
		  options: {
			specs: "build/dummytest.js"
		  }
	  }
    }
  });
  grunt.registerTask('test', ['jasmine']);  
};
