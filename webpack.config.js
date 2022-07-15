const path = require('path')
const htmlPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            scriptLoading: "blocking",
        }),
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000
    }
}