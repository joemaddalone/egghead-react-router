var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/build/',
  stats: {
    colors: true
  }
}))

var fs = require('fs')
var path = require('path')
var lessonDir = __dirname + '/lessons'


fs.readdirSync(lessonDir).forEach(function (file) {
  if (fs.statSync(path.join(lessonDir, file)).isDirectory())
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})

app.use(express.static(lessonDir))

app.listen(3000, function(){
  console.log('App running at http://localhost:3000')
})
