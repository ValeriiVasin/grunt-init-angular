module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: 'public'
                }
            }
        },
        watch: {
            app: {
                options: {
                    livereload: true
                },
                files: ['public/**/*.*']
            }
        }
    });

    grunt.registerTask('default', ['connect:server', 'watch:app']);

};
