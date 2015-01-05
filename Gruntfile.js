'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var appConfig = {
        dist: './dist/gokuai',
        app: './default'
    };

    grunt.initConfig({
        yeoman: appConfig,
        concat: {
            css: {
                src: ['<%= yeoman.app %>/common.css', '<%= yeoman.app %>/panel.css', '<%= yeoman.app %>/accordion.css', '<%= yeoman.app %>/window.css', '<%= yeoman.app %>/dialog.css',
                    '<%= yeoman.app %>/linkbutton.css', '<%= yeoman.app %>/textbox.css', '<%= yeoman.app %>/filebox.css', '<%= yeoman.app %>/combo.css', '<%= yeoman.app %>/combobox.css',
                    '<%= yeoman.app %>/layout.css', '<%= yeoman.app %>/tabs.css', '<%= yeoman.app %>/datagrid.css', '<%= yeoman.app %>/propertygrid.css', '<%= yeoman.app %>/pagination.css',
                    '<%= yeoman.app %>/calendar.css', '<%= yeoman.app %>/datebox.css', '<%= yeoman.app %>/numberbox.css', '<%= yeoman.app %>/spinner.css', '<%= yeoman.app %>/progressbar.css',
                    '<%= yeoman.app %>/searchbox.css', '<%= yeoman.app %>/slider.css', '<%= yeoman.app %>/menu.css', '<%= yeoman.app %>/menubutton.css', '<%= yeoman.app %>/splitbutton.css',
                    '<%= yeoman.app %>/messager.css', '<%= yeoman.app %>/tree.css', '<%= yeoman.app %>/validatebox.css', '<%= yeoman.app %>/tooltip.css'],
                dest: '<%= yeoman.app %>/easyui.css'
            }
        },
        cssmin: { //css文件压缩
            minify: {
                expand: true,
                cwd: '<%= yeoman.app %>/',
                src: ['*.css', '!easyui-all.css'],
                dest: '<%= yeoman.dist %>/themes/default/',
                ext: '.min.css'
            }
        },
        uglify: {
            js: {
                src: './jquery.easyui-ext.js',
                dest: '<%= yeoman.dist %>/jquery.easyui-ext.min.js'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.dist %>/locale',
                        '<%= yeoman.dist %>/plugins',
                        '<%= yeoman.dist %>/themes',
                        '<%= yeoman.dist %>/*.js',
                        '<%= yeoman.dist %>/licence_gpl.txt',
                        '<%= yeoman.app %>/easyui.css'
                    ]
                }]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: './bower_components/jquery-easyui-bower',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'locale/*',
                            'plugins/*',
                            'themes/*.css',
                            'easyloader.js',
                            'jquery.easyui.min.js',
                            'licence_gpl.txt'
                        ]
                    },
                    {
                        expand: true,
                        cwd: './bower_components/jquery-easyui-bower',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'themes/icons/*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>/themes/default',
                        src: [
                            'images/*'
                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'clean:dist',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist'
    ]);
};