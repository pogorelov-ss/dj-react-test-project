const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const SplitByPathPlugin = require('webpack-split-by-path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        new ExtractTextPlugin('styles.css'),
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
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader?{browsers:["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]}',
                }),
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]-[hash:base64:5]!autoprefixer-loader?{browsers:["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]}!stylus-loader',
                }),
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]-[hash:base64:5]!autoprefixer-loader?{browsers:["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]}!sass-loader',
                }),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
