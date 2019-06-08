const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  // hooks의 state 선언 방법
  // state를 하나씩 분리 + 각 state별 전용 setState
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  // ref 접근법
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (parseInt(value) === first * second) {
      setResult(`정답: ${value}`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
    // current를 사용
    inputRef.current.focus();
  }

  return (
    <>
      <div>{first} 곱하기 {second} 는?</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
}

module.exports = GuGuDan;