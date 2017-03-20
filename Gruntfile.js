module.exports = grunt => {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    var serve_static = require('serve-static');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '0.0.0.0',
                    open: true,
                    base: 'src',
                    keepalive: true,
                    middleware: (connect, options, middlewares) => {
                        return [
                            connect().use('/node_modules', serve_static('./node_modules')),
                            serve_static('src')
                        ];    
                    }
                    
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

    grunt.registerTask('serve', ['less', 'connect', 'watch']);
}