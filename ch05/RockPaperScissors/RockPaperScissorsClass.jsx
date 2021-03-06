import React, { Component } from 'react';

const rpsCoord = {
  rock: '0',
  scissor: '-142px',
  paper: '-284px',
}

const scores = {
  rock: 0,
  scissor: 1,
  paper: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rpsCoord).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

// constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 시 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모 컴포넌트에서 제거 시 -> componentWillUnmount -> 소멸
class RockPaperScissorsClass extends Component {
  state = {
    result: '',
    imgCoord: rpsCoord.rock,
    score: 0,
  };

  interval;

  // 컴포넌트가 첫 렌더링된 뒤 -> 비동기 요청 처리
  componentDidMount() {
    // const { imgCoord } = this.state; // -142px. 클로저 -> 비동기 함수가 바깥의 변수를 참조하는 경우...
    this.interval = setInterval(this.changeHand, 100);
  }

  // 리렌더링 후
  componentDidUpdate() {

  }

  // 컴포넌트가 제거되기 직전 -> 비동기 요청 정리
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 고차 함수(onClick에서 함수 선언부를 생략한다면)
  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;

    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      this.setState({
        result: '비겼습니다'
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다',
          score: prevState.score + 1
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rpsCoord.rock) {
      this.setState({
        imgCoord: rpsCoord.scissor
      });
    } else if (imgCoord === rpsCoord.scissor) {
      this.setState({
        imgCoord: rpsCoord.paper
      });
    } else if (imgCoord === rpsCoord.paper) {
      this.setState({
        imgCoord: rpsCoord.rock
      });
    }
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RockPaperScissorsClass;