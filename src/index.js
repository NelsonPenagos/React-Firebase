import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/containers/home';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
