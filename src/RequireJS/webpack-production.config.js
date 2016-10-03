
var webpack = require("webpack");
var WebpackStrip = require("strip-loader");

var devConfig = require("./webpack.config.js");

var stripLoader = {

    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')

};

//devConfig.module.loaders.push(stripLoader);

devConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
    })
]


module.exports = devConfig;
