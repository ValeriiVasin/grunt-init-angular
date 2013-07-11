module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            app: {
                options: {
                    livereload: true
                },
                files: ['index.html', '**/*.*']
            }
        }
    });

};
