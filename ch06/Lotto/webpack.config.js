const path = require('path');

module.exports = {
  name: 'lotto',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR']
            },
            debug: true,
          }],
          '@babel/preset-react', 
        ],
        plugins: [
          'react-hot-loader/babel',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
};
