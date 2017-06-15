const path = require("path")
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: {
        render_pages: './src/render_pages.js',
    },
    output: {
        path: path.resolve('./build/'),
        filename: "[name].js",
        chunkFilename: "[name].js",
    },
    target: 'node',
    externals: [
        nodeExternals(),
    ],
    plugins: [
        new ExtractTextPlugin('styles.css'),
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
                test: /\.html$/,
                loader: 'raw-loader',
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
