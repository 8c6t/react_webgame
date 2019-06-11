import React, { useState, useRef } from 'react';

const ResponseCheck = () => {

  const [ state, setState ] = useState('waiting');
  const [ message, setMessage ] = useState('클릭해서 시작하세요');
  const [ results, setResults ] = useState([]);

  // 리렌더링을 하지 않지만 값이 자주 바뀌는 경우 ref를 사용
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요');

      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤

    } else if (state === 'ready') {
      setState('waiting');
      setMessage('초록색일 때 클릭하세요');
      clearTimeout(this.timeout);
    } else if (state === 'now') {
      endTime.current = new Date();

      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResults(prevResult => (
        [...prevResult, endTime.current - startTime.current]
      ));
    }
  }

  const onReset = () => {
    setResults([]);
  };

  const renderAverage = () => (
    results.length === 0
      ? null
      : <>
        <div>평균 시간: {results.reduce((a, c) => a + c) / results.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  );

  return (
    <>
      <div
        id="screen"
        className={state} 
        onClick={onClickScreen}
      >
        {message}
      </div>
      {/* JSX 내 javascript 구문 작성 -> IIFE */}
      {(() => {
        if (results.length === 0) {
          return null
        } else {
          return (
          <>
            <div>평균 시간: {results.reduce((a, c) => a + c) / results.length}ms</div>
            <button onClick={onReset}>리셋</button>
          </>
          )
        }
      })()}
    </>
  );

};

export default ResponseCheck;