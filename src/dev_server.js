const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config')
const devServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
    proxy: {
        '*': 'http://localhost:8000/'
    }
})

devServer.listen(3000, '0.0.0.0', function(err, result) {
    console.log(err ? err : 'Listening at 0.0.0.0:3000')
})
