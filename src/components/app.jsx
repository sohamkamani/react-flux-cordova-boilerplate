import React from 'react';

import events from 'events';

global.emitter = new events.EventEmitter();

import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';
import AppBar from 'material-ui/lib/app-bar';


var App = React.createClass({

  componentDidMount : function(){
    var self = this;
    emitter
      .on('up', function() {
        self.setState({
          headerHeight: self.state.headerHeight - 1
        });
      });

    emitter
      .on('down', function() {
        self.setState({
          headerHeight: self.state.headerHeight + 1
        });
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
        <AppBar title="private buy" iconClassNameLeft="hidden" style={{backgroundColor: 'red'}} />
        <Header headerHeight={this.state.headerHeight}/>
        <Content/>
        <Footer headerHeight={this.state.headerHeight}/>
      </div>
    );
  }

});



module.exports = App;
