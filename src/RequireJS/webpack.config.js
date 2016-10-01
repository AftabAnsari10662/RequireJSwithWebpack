var webpack = require("webpack");

var path = "./wwwroot/app/";

module.exports = {

    entry: [path + "main.js", path + "login.js"],
    resolve: {
        alias: {
            jquery: "../lib/jquery/dist/jquery"
        }
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    watch: false


};