import React, { PureComponent, memo, useState } from 'react';

/* class Try extends PureComponent {
  constructor(props) {
    super(props);

    // 다른 동작
    const filtered = this.props.filter(() => {

    });

    this.state = {
      result: filtered,
      try: this.props.try,
    };
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    )
  }
} */

const Try = memo(({ tryInfo }) => {
  // 부모로부터 받은 props를 state로 만들어서 사용
  const [result, setResult] = useState(tryInfo.result);

  const onClick = () => {
    setResult('1');
  };

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  )
});

export default Try;