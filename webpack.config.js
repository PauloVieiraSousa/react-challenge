const path = require('path');

module.exports = {
    mode: "development",
    entry: './app/index.js',
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
                include: [path.resolve(__dirname, 'app')],
                exclude: [/node_modules/, /\.(e2e|spec)\.ts$/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/env', "@babel/preset-react"],
                        plugins: ["transform-es2015-modules-commonjs"]
                    }
                }]
            }            
        ],
    }
};
