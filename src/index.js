require('./styles/style.less');

import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import {Router, Route, Link} from 'react-router';
import Route1 from './components/route1.jsx';
import Route2 from './components/route2.jsx';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';

import FluxApp from './components/flux-app/app.jsx';
// import MenuItem from 'material-ui/lib/menus/menu-item';

var router = (
  <Router>
    <Route path="/" component={App}></Route>

    <Route path="/about" component={Route1}/>
    <Route path="/users" component={Route2}/>
  </Router>
);

var Nav = (
  <LeftNav ref="leftNavChildren" docked={false}/>
);

// var mainApp = (
//   <div>
//     <AppBar title="private buy" iconClassNameLeft="hidden" style={{
//       backgroundColor: 'red'
//     }}/>
//     {Nav}
//     {router}
//   </div>
// );

var mainApp = (
  <FluxApp />
);
ReactDom.render(mainApp, document.getElementById('app'));
