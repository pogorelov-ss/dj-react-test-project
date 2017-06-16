const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const SplitByPathPlugin = require('webpack-split-by-path')

const baseWebpackConfig = require('./common.config.js')

baseWebpackConfig.entry.main.push('webpack-dev-server/client?http://localhost:3000')
baseWebpackConfig.entry.main.push('webpack/hot/only-dev-server')

baseWebpackConfig.output.publicPath = 'http://localhost:3000/assets/bundles/'

baseWebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
baseWebpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin())
baseWebpackConfig.plugins.push(new BundleTracker({ filename: './webpack-stats.json' }))

module.exports = baseWebpackConfig
