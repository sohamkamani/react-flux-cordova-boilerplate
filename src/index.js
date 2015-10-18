import ReactDom from 'react-dom';
import React from 'react';
import App from './app.jsx';
import one from './one';

one();

ReactDom.render(<App /> , document.getElementById('app'));
