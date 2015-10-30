'use strict';

import React from 'react';

import events from 'events';

global.emitter = new events.EventEmitter();
let emitter = global.emmiter;

import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

var App = React.createClass({

  componentDidMount: function() {
    // var self = this;
    emitter.on('up', function() {
      location.hash = '#/about';
    });

    emitter.on('down', function() {
      location.hash = '#/users';
    });
  },

  getInitialState: function() {
    return {
      headerHeight: 150
    };
  },
  render: function() {

    return (
      <div className="app">
        <Header headerHeight={this.state.headerHeight}/>
        <Content/>
        <Footer headerHeight={this.state.headerHeight}/>
      </div>
    );
  }

});

module.exports = App;
