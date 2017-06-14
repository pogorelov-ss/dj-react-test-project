const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const SplitByPathPlugin = require('webpack-split-by-path')

module.exports = {
    context: __dirname,
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
    },

    output: {
        path: path.resolve('./build/'),
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js",
        publicPath: 'http://localhost:3000/assets/bundles/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleTracker({ filename: './webpack-stats.json' }),
        // new SplitByPathPlugin([{
        //     name: 'vendor',
        //     path: path.join(__dirname, './node_modules/')
        // }])
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader',
                    'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
