module.exports = grunt => {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        connect: {
            target: {
                options: {
                    port: 8000,
                    hostname: '0.0.0.0',
                    open: true,
                    base: 'app',
                    livereload: true
                }
            }
        },
        watch: {
            less: {
                    files: ['**/*.less', 'src/styles'],
                    tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['src/styles']
                },
                files: {
                    'src/styles/styles-css.css': 'src/styles/styles-less.less'
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect', 'watch']);
}