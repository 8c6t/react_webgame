const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'gugudan-webpack',
  mode: 'development',
  devtool: 'eval', // 배포시: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          // @babel/preset-env에 대한 세부 옵션
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR' ], // browserlist
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  // 
  plugins: [
    // 로더(module) 들에게 옵션을 추가해주는 플러그인
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
}