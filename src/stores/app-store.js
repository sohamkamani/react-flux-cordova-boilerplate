'use strict';

var AppDispatcher = require('../infrastructure/dispatcher'),
  EventEmitter = require('events').EventEmitter,
  assign = require('object-assign');

var _shoes = {
  text : 'none'
};

var loadData = function(data) {
  _shoes.text = data;
};

var AppStore = assign({}, EventEmitter.prototype, {
  getData: function() {
    return _shoes;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});


AppDispatcher.register(function(payload) {
  var action = payload.action;
  // Define what to do for certain actions
  switch(action.type) {
    case 'INPUT_TEXT_CHANGED':
      // Call internal method based upon dispatched action
      loadData(action.text);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  AppStore.emitChange();

  return true;

});

module.exports = AppStore;
