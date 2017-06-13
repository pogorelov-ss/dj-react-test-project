const gulp = require('gulp')
const gutil = require('gulp-util')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const server = require( 'gulp-develop-server' )

gulp.task('build:client:js', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err)
        }
        gutil.log('[webpack]', stats.toString())
        callback()
    })
})

gulp.task('build:client', ['build:client:js'], function () {
    gulp.watch('./assets/js/**/*.*', ['build:client'])
})

gulp.task('dev-server:start', [/*'build'*/], function() {
    server.listen({path: './src/dev_server.js'})
})

gulp.task('build', ['build:client'])

gulp.task('default', [/*'build',*/ 'dev-server:start'])
