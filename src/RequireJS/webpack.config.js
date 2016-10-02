var webpack = require("webpack");

var path = "./wwwroot/app/";

//var commonPlugins = new webpack.optimize.CommonsChunkPlugin("shared.js");


module.exports = {

    entry:  path + "app.js",
    
    //plugins: [commonPlugins],
    resolve: {
        alias: {
            "jquery": "../lib/jquery/dist/jquery",
            "angular": "../lib/angular/angular",
            "angularuiRouter": "../lib/angular-ui-router/release/angular-ui-router",
            "underscore":"../lib/underscore/underscore"
        }
    },
    output: {
        path: "./wwwroot/app/build",
        filename: 'bundle.js'
    },
    //plugins: [
    //  new webpack.optimize.UglifyJsPlugin({ minimize: true })
    //],
    watch: false


};