/**
 * 
 * Gruntfile configuration.
 * 
 */

module.exports = function(grunt) {
    /**
     * Load all grunt plugins as set in devDependencies.
     */
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task: sass.
        sass: {
            main: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/styles.css': 'sass/styles.scss'
                }
            }
        },

        // Task: replace.
        replace: {
            css: {
                options: {
                    usePrefix: false,
                    patterns: [
                        {
                            match: '/**/',
                            replacement: ''
                        }
                    ]
                },
                files: [
                    {
                        'css/styles.css': 'css/styles.css' // for single file
                    }
                ]
            }
        }
    });

    /**
     * Register tasks.
     */
    grunt.registerTask('default', ['sass', 'replace']);
};