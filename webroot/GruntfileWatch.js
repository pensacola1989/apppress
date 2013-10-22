'use strict';
module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var yeomanConfig = {
        admin: {
            app: 'admin/app',
            test: 'admin/test',
            dist: 'dist/admin'
        },
        client: {
            app: 'client/app',
            test: 'admin/test',
            dist: 'dist/admin'
        }
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            adminTemplates: {
                files: '<%= yeoman.admin.app %>/templates/**/*.hbs',
                tasks: ['emberTemplates:admin']
            },
            clientTemplates: {
                files: '<%= yeoman.client.app %>/templates/**/*.hbs',
                tasks: ['emberTemplates:client']
            },

            adminCompass: {
                files: ['<%= yeoman.admin.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:admin']
            },
            clientCompass: {
                files: ['<%= yeoman.client.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:client']
            },

            adminNeuter: {
                files: ['<%= yeoman.admin.app %>/scripts/**/*.js'],
                tasks: ['neuter:admin']
            },
            clientNeuter: {
                files: ['<%= yeoman.client.app %>/scripts/**/*.js'],
                tasks: ['neuter:client']
            }
        },

        emberTemplates: {
            admin: {
                options: {
                    templateName: function (sourceFile) {
                        var templatePath = yeomanConfig.admin.app + '/templates/';
                        return sourceFile.replace(templatePath, '');
                    }
                },
                files: {
                    '.tmp/admin/scripts/compiled-templates.js': '<%= yeoman.admin.app %>/templates/**/*.hbs'
                }
            },
            client: {
                options: {
                    templateName: function (sourceFile) {
                        var templatePath = yeomanConfig.admin.app + '/templates/';
                        return sourceFile.replace(templatePath, '');
                    }
                },
                files: {
                    '.tmp/client/scripts/compiled-templates.js': '<%= yeoman.client.app %>/templates/**/*.hbs'
                }
            }
        },

        compass: {
            options: {
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: true
            },

            admin: {
                options: {
                    importPath: 'admin/app/bower_components',
                    environment: 'development',
                    debugInfo: true,

                    sassDir: '<%= yeoman.admin.app %>/styles',
                    cssDir: '<%= yeoman.admin.app %>/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.admin.app %>/images',
                    javascriptsDir: '<%= yeoman.admin.app %>/scripts',
                    fontsDir: '<%= yeoman.admin.app %>/styles/fonts'
                }
            },
            client: {
                options: {
                    importPath: 'client/app/bower_components',
                    environment: 'development',
                    debugInfo: true,

                    sassDir: '<%= yeoman.client.app %>/styles',
                    cssDir: '<%= yeoman.client.app %>/styles',
                    generatedImagesDir: '.tmp/images/generated',
                    imagesDir: '<%= yeoman.client.app %>/images',
                    javascriptsDir: '<%= yeoman.client.app %>/scripts',
                    fontsDir: '<%= yeoman.client.app %>/styles/fonts'
                }
            }
        },

        neuter: {
            admin: {
                options: {
                    filepathTransform: function (filepath) { return 'admin/app/scripts/' + filepath; }
                },
                src: '<%= yeoman.admin.app %>/scripts/index.js',
                dest: '.tmp/admin/scripts/combined-scripts.js'
            },
            client: {
                options: {
                    filepathTransform: function (filepath) { return 'client/app/scripts/' + filepath; }
                },
                src: '<%= yeoman.client.app %>/scripts/index.js',
                dest: '.tmp/client/scripts/combined-scripts.js'
            }
        }
    });

};
