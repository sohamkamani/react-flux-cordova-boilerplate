'use strict';

var React = require('react');

var AppActionCreator = require('../../infrastructure/app-action-creator'),
  AppStore = require('../../stores/app-store');

import SquareBox from './square-box.jsx';
import ResetButton from './reset-button.jsx';
import LengthMood from './length-mood.jsx';

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
        <input onChange={this.updateText} value={this.state.text}></input>
        <SquareBox text={this.state.text}/>
        <LengthMood wordLength={this.state.text.length} />
        <ResetButton />
      </div>
    );
  },

  updateText: function(e) {
    AppActionCreator.inputTextChanged(e.target.value);
  }

});

module.exports = App;
