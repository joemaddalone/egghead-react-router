var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var lessonsDir = __dirname + '/lessons'


function getLessons(){
  var entries = {}
  fs.readdirSync(lessonsDir).forEach(function(dir){
    if(fs.statSync(path.join(lessonsDir, dir)).isDirectory()){
      entries[dir.substring(3)] = path.join(lessonsDir, dir, 'main.js');
    }
  });
  return entries
}


module.exports = {

  devtool: 'inline-source-map',

  entry: getLessons(),

  output: {
    path: lessonsDir + '/build',
    filename: '[name].js',
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
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

}
