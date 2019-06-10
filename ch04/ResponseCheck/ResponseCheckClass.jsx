import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    results: [],
  }

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });

      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭' 
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '초록색일 때 클릭하세요',
      });
      clearTimeout(this.timeout);
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요',
          results: [...prevState.results, this.endTime - this.startTime ],
        }
      });
    }
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