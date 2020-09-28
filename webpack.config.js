const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.html$/, loader: 'html-loader' }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ]
}
