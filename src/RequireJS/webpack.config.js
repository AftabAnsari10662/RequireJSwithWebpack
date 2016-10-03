var webpack = require("webpack");

var path = "./wwwroot/app/";


module.exports = {

    entry:  path + "app.js",
    
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
      
    watch: false


};