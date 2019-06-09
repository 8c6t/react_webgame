import React, { Component } from 'react';
import Try from './Try';

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

  fruits = [
    { fruit: '사과', taste: '맛있다' },
    { fruit: '감', taste: '시다' },
    { fruit: '귤', taste: '달다' },
    { fruit: '밤', taste: '떪다' },
    { fruit: '배', taste: '맛있다' },
    { fruit: '사과', taste: '맛없다' },
  ];

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
          {this.fruits.map((v, i) => {
            return (
              <Try value={v} index={i} />
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