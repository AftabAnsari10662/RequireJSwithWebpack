var webpack = require("webpack");


module.exports = {

   
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
    ]

    
};