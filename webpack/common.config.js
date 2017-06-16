const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssConfig = 'css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]-[hash:base64:5]'
const autoprefixerConfig = 'autoprefixer-loader?{browsers:["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]}'


module.exports = {
    context: __dirname,
    entry: {
        main: [
            '../src/index.js'
        ],
    },

    output: {
        path: path.resolve('./build/'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
    },

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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssConfig +'!' + autoprefixerConfig,
                }),
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssConfig + '!' + autoprefixerConfig + '!stylus-loader',
                }),
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssConfig + '!' + autoprefixerConfig + '!sass-loader',
                }),
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'src', 'src/js'],
        extensions: ['.js', '.jsx']
    },
}
