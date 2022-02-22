const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const config = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: {
        static: './dist',
        port: 3000,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // resolve: {
    //     extensions: ['js', 'ts', 'scss', 'css'],
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};

module.exports = (env, args) => {
    console.log('-----------')
    console.log(env)
    console.log('-----------')
    console.log(args)
    return config;
}