'use strict';
var React = require('react');

var AppActionCreator = require('../../infrastructure/app-action-creator');

var ResetButton = React.createClass({

  render: function() {
    return (
      <button onClick={this._onClick}>Reset</button>
    );
  },

  _onClick : function(){
    AppActionCreator.resetText();
  }

});

module.exports = ResetButton;
