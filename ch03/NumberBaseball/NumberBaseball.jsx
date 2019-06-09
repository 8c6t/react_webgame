import React, { useState, memo } from 'react';
import Try from './Try';

// this를 사용하지 않으면 밖으로 빼도 된다
// export시 다른 곳에서 사용 가능
function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for(let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

// 자식 컴포넌트들이 모두 PureComponent면 부모 컴포넌트도 PureComponent를 적용할 수 있음
const NumberBaseball = memo(() => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value === answer.join('')) {
      setResult('홈런');
      setTries(prevTries => [...prevTries, { try: value, result: '홈런!'}]);

      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다`);

        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike++;
          } else if(answer.includes(answerArray[i])) {
            ball++;
          }
        }
        setTries(prevTries => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }]);
        setValue('');
      };
    };
  };

  const onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value);
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i + 1}차 시도 :`} tryInfo={v} index={i} />
          )
        })}
      </ul>
    </>
  );
});

export default NumberBaseball;