module.exports = grunt => {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-postcss');
    var serve_static = require('serve-static');

    grunt.initConfig({
        // Connect -- running a server
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
        // Watch -- watching for files changing in development
        watch: {
            less: {
                files: ['**/*.less', 'src/styles'],
                tasks: ['less:development']
            },
            ts: {
                files: ['**/*.ts'],
                tasks: ['ts:development']
            }
        },
        // Less -- compiling less to css 
        less: {
            development: { // development
                options: {
                    paths: ['src/styles']
                },
                files: {
                    'src/styles/styles-css.css': 'src/styles/styles-less.less'
                }
            },
            production: { // production
                options: {
                    paths: ['.temp/app-copy/styles']
                },
                files: {
                    '.temp/concat/css/styles.css': '.temp/app-copy/styles/styles-less.less'
                }
            }
        },
        // Postcss -- use autoprefixer for the css files
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions']})
                ]
            },
            dist: {
                src: '.temp/concat/css/styles.css'
            }
        },
        // Typescript -- compiling typescript to javascript
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
            development: { // development
                src: ['src/**/*.ts'],
                options: {
                    fast: 'never',
                    failOnTypeErrors: false
                }
            },
            production: { // production
                src: ['.temp/app-copy/**/*.ts'],
                options: {
                    fast: 'never',
                    failOnTypeErrors: false
                }
            }
        },
        // Copy -- copies the project to .temp/app-copy
        copy: {
            main: { // copy all the app to the .temp folder
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src/',
                        src: [
                            '**'
                        ],
                        dest: '.temp/app-copy'
                    }
                ]
            },
            production: { // copy from the .temp folder the cv's and images
                files: [
                    {
                        expand: true,
                        cwd: '.temp/app-copy',
                        src: 'cv/**',
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: '.temp/app-copy',
                        src: 'images/**',
                        dest: 'dist'
                    }
                ]
            }
        },
        // Clean -- delete .temp folder
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: '.temp'
                    },
                    {
                        src: 'dist'
                    }
                ]
            }
        },
        // Concat -- concating js files
        concat: {
            js: {
                src: ['.temp/app-copy/**/*.js'],
                dest: '.temp/concat/js/scripts.js'
            }
        },
        // Html minify -- minifing html files and put them, in the dist folder
        htmlmin: {
            dist: {
                options: {
                    caseSensitive: true,
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    preserveLineBreaks: true
                },
                files: [{
                    expand: true,
                    cwd: '.temp/app-copy',
                    src: ['*.html', '**/*.html'],
                    dest: 'dist'
                }]
            }
        },
        // Minifing css and put it in the dist folder
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '.temp/concat/css',
                    src: 'styles.css',
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        // Uglify
        uglify: {
            options: {
                manage: false
            },
            target: {
                src: ['.temp/concat/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },
    });

    // Tasks
    grunt.registerTask('build',
        [
            'clean',
            'copy:main',
            'copy:production',
            'less:production',
            'ts:production',
            'concat',
            'postcss',
            'cssmin',
            'uglify',
            'htmlmin'
        ]);
    grunt.registerTask('serve', ['less', 'connect', 'watch']);
}