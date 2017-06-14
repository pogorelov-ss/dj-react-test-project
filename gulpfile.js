const gulp = require('gulp')
const gutil = require('gulp-util')
const webpack = require('webpack')
const webpackClientConfig = require('./webpack.config')
const webpackServerConfig = require('./webpack.config.server')
const server = require( 'gulp-develop-server' )
const shell = require('gulp-shell')

gulp.task('build:client:js', function(callback) {
    webpack(webpackClientConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err)
        }
        gutil.log('[webpack-client]', stats.toString())
        callback()
    })
})

gulp.task('build:client', ['build:client:js'])

gulp.task('build:server-render:js', function(callback) {
    webpack(webpackServerConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err)
        }
        gutil.log('[webpack-server]', stats.toString())
        callback()
    })
})

gulp.task('build:server-render:render', ['build:server-render:js'], shell.task(['node build/render_pages.js']))
gulp.task('build:server-render:only-build', ['build:server-render:js', 'build:server-render:render'])

gulp.task('build:server-render', [
        'build:server-render:js', 'build:server-render:render'
    ], function () {
        // gulp.watch('./src/**/*.*', ['build:server-render'])
    })


gulp.task('dev-server:start', [/*'build'*/], function() {
    server.listen({path: './src/dev_server.js'})
})

gulp.task('build', ['build:client', 'build:server-render:only-build'])

gulp.task('default', ['build:server-render', 'dev-server:start'])
