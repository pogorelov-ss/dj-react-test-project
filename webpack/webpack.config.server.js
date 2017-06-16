const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const SplitByPathPlugin = require('webpack-split-by-path')

const baseWebpackConfig = require('./common.config.js')

baseWebpackConfig.entry = {
    render_pages: '../src/render_pages.js',
}
baseWebpackConfig.output = {
    path: path.resolve('./build/'),
    filename: '[name].js',
    chunkFilename: '[name].js',
}
baseWebpackConfig.target = 'node',
baseWebpackConfig.externals = [
    nodeExternals(),
],

baseWebpackConfig.module.loaders.push({
    test: /\.html$/,
    loader: 'raw-loader',
})

module.exports = baseWebpackConfig
