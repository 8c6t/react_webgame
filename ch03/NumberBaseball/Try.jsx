import React, { Component } from 'react';

class Try extends Component {
  render() {
    const { value, index } = this.props;
    
    return (
      <li key={value.fruit + value.taste}>
        <b>{value.fruit}</b> - {index}
        <div>컨텐츠</div>
        <div>컨텐츠1</div>
        <div>컨텐츠2</div>
        <div>컨텐츠3</div>
      </li>
    )
  }
}

export default Try;