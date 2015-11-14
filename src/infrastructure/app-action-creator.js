'use strict';

var AppDispatcher = require('./dispatcher');

module.exports = {

  inputTextChanged : function(text){
    AppDispatcher.randomAction({
      type : 'INPUT_TEXT_CHANGED',
      text : text
    });
  },

  resetText(){
    AppDispatcher.randomAction({
      type : 'RESET_TEXT'
    });
  }

};
