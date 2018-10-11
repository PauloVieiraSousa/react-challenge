const path = require('path');

module.exports = {
    mode: "development",
    entry: './app/App.js',
    devtool: 'inline-source-map',
    devServer:{
        inline: true,
        contentBase: './public'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'  
            }            
        ],
    }
};
