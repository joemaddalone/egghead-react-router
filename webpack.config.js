var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var lessonDir = __dirname + '/lessons'
module.exports = {

  devtool: 'source-map',

  entry: fs.readdirSync(lessonDir).reduce(function (entries, dir) {
    if (fs.statSync(path.join(lessonDir, dir)).isDirectory())
      entries[dir.split('-')[0]] = path.join(lessonDir, dir, 'main.js')

    return entries
  }, {}),

  output: {
    path: lessonDir + '/build',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
