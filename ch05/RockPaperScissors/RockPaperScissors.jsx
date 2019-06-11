import React, { useState, useRef, useEffect } from 'react';

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

const RockPaperScissors = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rpsCoord.rock);
  const [score, setScore] = useState(0);

  const interval = useRef();

  // componentDidMount, componentDidUpdate 대응(1:1 대응은 아님)
  useEffect(() => {
    console.log('다시 실행');
    interval.current = setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할
      // 매번 clearInterval을 하기 대문에 setTimeout을 하는 것과 동일
      console.log('종료');
      clearInterval(interval.current);
    }
  }, [imgCoord]); // 두 번째 인수 배열에 넣은 값들이 바뀔 때 useEffect가 실행됨. 빈 배열이라면 첫 한번만 실행됨(componentDidMount)

  const changeHand = () => {
    if (imgCoord === rpsCoord.rock) {
      setImgCoord(rpsCoord.scissor);
    } else if (imgCoord === rpsCoord.scissor) {
      setImgCoord(rpsCoord.paper);
    } else if (imgCoord === rpsCoord.paper) {
      setImgCoord(rpsCoord.rock);
    }
  };

  // 고차 함수(onClick에서 함수 선언부를 생략한다면)
  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      setResult('비겼습니다');
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다');
      setScore(prevScore => prevScore + 1);
    } else {
      setResult('졌습니다');
      setScore(prevScore => prevScore - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <div>
        <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
        <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
        <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

export default RockPaperScissors;