module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                expand: true,
                cwd: "public/assets/coffee/App",
                src: ['**/*.coffee'],
                dest: 'public/javascripts/App',
                ext: '.js'
            }
        },
        watch: {
            scripts: {
                files: 'public/assets/coffee/**/*.coffee',
                tasks: ['coffee']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['']);

};
