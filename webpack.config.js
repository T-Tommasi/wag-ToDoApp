const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        watchFiles: ['./src/**']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
        ],
    },
};

module.exports = config