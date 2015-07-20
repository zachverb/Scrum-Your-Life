var path = require('path');
var merge = require('webpack-merge');
var fs = require('fs');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var isDev = TARGET === 'dev';

var jsxLoader = isDev ? ['react-hot', 'babel?stage=1', 'flowcheck'] : ['babel?stage=1'];

var common = {
    entry: path.resolve(ROOT_PATH, 'client/main.js'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'actions': path.resolve(ROOT_PATH, 'client', 'actions'),
            'components': path.resolve(ROOT_PATH, 'client', 'components'),
            'stores': path.resolve(ROOT_PATH, 'client', 'stores')
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
    common = merge(common, {
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
    common = merge(common, {
        devtool: "#inline-source-map"
    });
}

module.exports = common;