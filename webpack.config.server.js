const path = require("path")
const nodeExternals = require('webpack-node-externals')

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
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}
