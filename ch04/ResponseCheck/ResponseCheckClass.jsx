import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    results: [],
  }

  onClickScreen = () => {

  }

  renderAverage = () => {
    const { results }  = this.state;
    return results.length === 0
      ? null
      : <div>평균 시간: {results.reduce((a, c) => a + c) / results.length}ms</div>
  }

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        { this.renderAverage() }
      </>
    );
  }
}

export default ResponseCheck;