import React from 'react';
import ReactDOM from 'react-dom';
import Duetime from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Duetime />, document.getElementById('root'));
registerServiceWorker();
