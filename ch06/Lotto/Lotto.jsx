import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';
import { clearTimeout } from 'timers';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1); // 1 ~ 46
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winBalls, setWinBalls] = useState([]);
  // useMemo: 복잡한 함수 결괏값을 기억
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNubers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  // useRef: 일반 값을 기억
  const timeouts = useRef([]);

/*   
  // componentDidUpdate만, componentDidMount에서는 작동 X
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // 작업
    }
  }, [바뀌는값]); */

  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate를 둘 다 수행

  useEffect(() => {
    console.log('로또 숫자를 생성합니다');
  }, [winNumbers]);


  // useCallback: 함수 자체를 기억. 함수가 새로 생성되지 않음
  // 자식 컴포넌트에 props로 함수를 넘길 때는 필수(props가 계속 새로 전달됨 -> 리렌더링)
  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers);
    setWinNubers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      { redo && <button onClick={onClickRedo}>한 번 더!</button> }
    </>
  )
}

export default Lotto;