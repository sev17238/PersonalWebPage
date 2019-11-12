/*
    ./webpack.config.js
*/
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  //modules
  module: {
    rules: [
      { //css files will be evaluated by style and css loaders when compiling the project
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { //js and jsx files will be evaluated by babel and eslint loaders when compiling the project
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader","eslint-loader"]        
      }, 
      { //Image Loaders--------------------------------------------------------------
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
      //FOR SASS IMPLEMENTATION--------------------------------------------------------------
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
      //------------------------------------------------------------------------------------
    ]  
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'] //doesn't have to be added on imports
  },
  //webpack plugins
  plugins: [
    HtmlWebpackPluginConfig,
    //Added a hash to the filename of the bundles for easy and efficient cache busting.
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
}

