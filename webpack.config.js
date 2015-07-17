var path = require('path');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var isDev = TARGET === 'dev';

var jsxLoader = isDev ? ['react-hot', 'babel?stage=1'] : ['babel?stage=1'];

var common = {
    entry: path.resolve(ROOT_PATH, 'client/main.js'),
    output: {
        path: __dirname + "/build/",
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'actions': path.resolve(ROOT_PATH, 'client', 'actions'),
            'components': path.resolve(ROOT_PATH, 'client', 'components'),
            'store': path.resolve(ROOT_PATH, 'client', 'store')
        },
        extensions: ['', '.js', '.jsx']
    },
    debug: false,
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: jsxLoader
        },
        {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    }
}

if(TARGET === 'build') {
    module.exports = merge(common, {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
      ]
    });
}

if(TARGET === 'dev') {
    module.exports = common;
}
