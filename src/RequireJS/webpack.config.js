var webpack = require("webpack");

var path = "./wwwroot/app/";

var commonPlugins = new webpack.optimize.CommonsChunkPlugin("shared.js");


module.exports = {

    entry: {

        login: path + "login.js",
        app: path + "main.js"
    },
    plugins: [commonPlugins],
    resolve: {
        alias: {
            jquery: "../lib/jquery/dist/jquery"
        }
    },
    output: {
        path: "./wwwroot/app/build",
        filename: '[name].js'
    },
    //plugins: [
    //  new webpack.optimize.UglifyJsPlugin({ minimize: true })
    //],
    watch: false


};