const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'word-relay-setting', // 웹팩 설정에 대한 이름
  mode: 'development', // 실 서비스 시에는 production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자 검색. entry에서 확장자 생략 시 사용
  },
  // 입력
  entry: {
    app: ['./client'], // 읽을 파일
  },
  // 모듈 적용
  module: {
    rules: [{
      test: /\.jsx?/, // jsx 파일에
      loader: 'babel-loader', // babel-loader를 적용
      options: { // 바벨의 옵션
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
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel',
        ],
      },
    }],
  },
  plugins: [
    // 로더(module) 들에게 옵션을 추가해주는 플러그인
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/', // dev-server의 번들링 파일 경로 변경 시(가상의 경로)
  },
};