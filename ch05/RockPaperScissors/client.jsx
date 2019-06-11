import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RPSClass from './RockPaperScissorsClass';
import RPS from './RockPaperScissors';

const Hot = hot(RPS);

ReactDOM.render(<Hot />, document.querySelector('#root'));
