import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import emojis from './emojiList.json';

ReactDOM.render(<App emojis={emojis}/>, document.getElementById('root'));
registerServiceWorker();
