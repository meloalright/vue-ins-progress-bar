const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')
const isProduction = process.env.NODE_ENV === 'production'

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'vue-ins-progress-bar.js',
        libraryTarget: 'umd', 
        library: 'vueInsProgressBar'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                options: {
                    "plugins": ["transform-object-assign"]
                }
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}