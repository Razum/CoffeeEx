module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'public/tests/karma.conf.js',
                background: true,
                browsers: ['PhantomJS'],
                autoWatch: true,
                port: 9876
            }
        },
        coffee: {
            compile: {
                expand: true,
                cwd: "public/assets/coffee/",
                src: ['**/*.coffee'],
                dest: 'public/javascripts/',
                ext: '.js'
            }
        },
        watch: {
            //run unit tests with karma (server needs to be already running)
            karma: {
                files: ['public/tests/**/*.js', 'public/tests/**/*.coffee'],
                tasks: ['karma:unit:run']
            },
            scripts: {
                files: 'public/assets/coffee/App/**/*.coffee',
                tasks: ['coffee']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['']);

    //to start tru karma:unit watch
    grunt.registerTask('devandtest', ['karma:unit', 'watch']);

};
