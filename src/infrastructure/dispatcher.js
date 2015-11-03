'use strict';

var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

AppDispatcher.randomAction = function(action){
  this.dispatch({
    source : 'RANDOM_ACTION',
    action : action
  });
};

module.exports = AppDispatcher;
