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
          {['사과', '바나나', '포도', '귤'].map((v) => {
            return (
              <li>{v}</li>
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