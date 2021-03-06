const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebPackPlugin(
        {
            template: './src/index-template.html'
        },
        // new webpack.ProvidePlugin({
        //         $: "jquery",
        //         jQuery: "jquery"
        //     }
        // )
    )],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.svg|png|jpg|gif$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
}