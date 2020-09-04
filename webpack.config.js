const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'build/index.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}