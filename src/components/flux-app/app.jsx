'use strict';

var React = require('react');

var AppActionCreator = require('../../infrastructure/app-action-creator'),
  AppStore = require('../../stores/app-store');

import SquareBox from './square-box.jsx';

var App = React.createClass({

  componentWillMount(){
    var self = this;
    AppStore.addChangeListener(()=>{
      var data = AppStore.getData();
      self.setState(data);
    });
  },

  getInitialState: function() {
    return AppStore.getData();
  },

  render: function() {
    return (
      <div>
        <input onChange={this.updateText}></input>
        <SquareBox text={this.state.text}/>
      </div>
    );
  },

  updateText: function(e) {
    AppActionCreator.inputTextChanged(e.target.value);
  }

});

module.exports = App;
