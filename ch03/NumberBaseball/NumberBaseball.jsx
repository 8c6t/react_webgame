import React, { Component } from 'react';

function getNumbers() {

}

class NumberBaseball extends Component {

  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  }

  onSubmitForm = (e) => {

  }

  onChangeInput = (e) => {

  }

  render() {
    const { result, value, answer, tries } = this.state;

    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {[
            { fruit: '사과', taste: '맛있다' },
            { fruit: '감', taste: '시다' },
            { fruit: '귤', taste: '달다' },
            { fruit: '밤', taste: '떪다' },
            { fruit: '배', taste: '맛있다' },
            { fruit: '사과', taste: '맛없다' },
          ].map((v) => {
            /* index를 key로 쓰는 경우 성능 최적화에 문제가 있음 */
            /* 요소가 추가만 되는 배열은 i를 사용해도 됨(삭제 X) */
            return (
              <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
            )
          })}
        </ul>
      </>
    )
  }
}

export const hello = 'hello';

export default NumberBaseball;

// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;