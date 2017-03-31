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
            },
            ts: {
                files: ['**/*.ts'],
                tasks: ['ts:dev']
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
        },
        ts: {
            options: {
                target: "es5",
                module: "commonjs",
                moduleResolution: "node",
                sourceMap: true,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                lib: ["es2015", "dom"],
                noImplicitAny: true,
                suppressImplicitAnyIndexErrors: true,
            },
            dev: {
                src: ['src/**/*.ts'],
                options: {
                    fast: 'never',
                    failOnTypeErrors: false
                }
            }
        },
        concat: {
            js: {
                src: ['src/**/*.js'],
                dest: 'src/dist/js/js-concat.js'
            }
        },
        uglify: {
            options: {
                manage: false
            },
            target: {
                src: ['src/dist/js/js-concat.js'],
                dest: 'src/dist/js/js-minify.js'
            }
        },
    });
    grunt.registerTask('build', ['less', 'ts', 'concat', 'uglify']);
    grunt.registerTask('serve', ['less', 'connect', 'watch']);
}