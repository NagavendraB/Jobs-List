import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.querySelector('#root'));
registerServiceWorker();