const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PATHS = require('./paths.js');
const fileLoader = {
    loader: 'file-loader',
    options: {
        outputPath: 'assets',
    },
};
const styleLoader = 'style-loader'
console.log(__dirname)
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: PATHS.dist,
        filename: '[name].js',
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [styleLoader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]_[local]-[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            root: PATHS.appSrc,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, //needed for resolve-url-loader to operate on paths
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [fileLoader],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: '@svgr/webpack',
                    options: {
                        memo: true,
                        ref: true,
                        svgoConfig: {
                            plugins: [{prefixIds: false}],
                        },
                    },
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
        modules: [__dirname, 'node_modules']
    },
    devServer: {
        static: {
            directory: path.join('./public'),
          },
        compress: true,
        port: 9000,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}