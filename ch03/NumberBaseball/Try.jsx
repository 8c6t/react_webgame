import React from 'react';

const Try = ({ tryInfo }) => (
  <li>
    <div>{tryInfo.try}</div>
    <div>{tryInfo.result}</div>
  </li>
);

export default Try;