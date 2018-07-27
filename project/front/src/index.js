import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/js/materialize.min';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
