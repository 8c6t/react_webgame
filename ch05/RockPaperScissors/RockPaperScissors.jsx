import React, { Component } from 'react';

// constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 시 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모 컴포넌트에서 제거 시 -> componentWillUnmount -> 소멸
class RockPaperScissors extends Component {
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  };

  // 컴포넌트가 첫 렌더링된 뒤
  componentDidMount() {

  }

  // 리렌더링 후
  componentDidUpdate() {

  }

  // 컴포넌트가 제거되기 직전
  componentWillUnmount() {

  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>바위</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RockPaperScissors;