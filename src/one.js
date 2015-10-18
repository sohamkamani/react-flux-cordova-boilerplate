
module.exports = () => {
  emitter.emit('done', () => { console.log('myfunc')});
} ;
