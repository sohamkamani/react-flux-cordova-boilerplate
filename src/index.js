require('./styles/style.less');

import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app.jsx';


ReactDom.render(<App /> , document.getElementById('app'));
