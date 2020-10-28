const webpack = require('webpack');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
module.exports = {
  entry: "./src/index.js",
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'EMAIL_ID': JSON.stringify(process.env.EMAIL_ID),
        'SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
        'TO_NAME': JSON.stringify(process.env.TO_NAME),
        'TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID)         
      }
    }),
    htmlPlugin
  ],
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  },
};