const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
   entry:'./src/main.js',
   module:{
       rules:[           
            { test: /\.vue$/, use: 'vue-loader' },
       ]
   },
   plugins: [
     new VueLoaderPlugin(),
     new HtmlWebpackPlugin({template: './template.html'})
   ]
}