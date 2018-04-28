import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
