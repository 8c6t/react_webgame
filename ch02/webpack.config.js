const path = require('path');

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
  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};