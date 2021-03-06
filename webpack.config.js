const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendor = [
    'react',
    'react-dom',
    'react-router'
];

module.exports = {
    entry: {
        bundle: './src/index.tsx',
        vendor,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: "eval-cheap-source-map",
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
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'src/template.html'
            }
        )
    ],
    devServer: {
        historyApiFallback: true,
    }
}