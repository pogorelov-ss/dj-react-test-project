var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var SplitByPathPlugin = require('webpack-split-by-path');


module.exports = {
    context: __dirname,
    entry: './assets/js/index',
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js"
    },

    plugins: [
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
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
