import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './NumberBaseball';
import NumberBaseballClass from './NumberBaseballClass';
// import RenderTest from './RenderTest'

const Hot = hot(NumberBaseballClass);

ReactDOM.render(<Hot />, document.querySelector('#root'));