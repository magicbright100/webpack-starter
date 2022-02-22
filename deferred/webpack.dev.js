const { merge } = require('webpack-merge');
const common = require('./deferred/webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
});