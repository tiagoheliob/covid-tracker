const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendor = [
    'react',
    'react-dom',
    'react-router'
];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {   
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader', 
                    'css-loader'
                ],
                test: /\.css$/i,
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            {
                names: 
                [
                    'vendor',
                    'manifest'
                ]
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: 'src/template.html'
            }
        ),
        new webpack.DefinePlugin(
            {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        )
    ],
    devServer: {
        historyApiFallback: true,
    }
}