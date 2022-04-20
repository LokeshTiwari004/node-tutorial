const EventEmitter = require('events')

class MyEvent extends EventEmitter {}

const myEvent = new MyEvent()

let m = 0;

myEvent.on('error', (err) => {
  console.error(err)
})

myEvent.on('get', function (name){
  console.log(name, this);
})

myEvent.once('get', () => {
      console.log(++m, this)
})

myEvent.emit('get', 'lokesh')
myEvent.emit('get', 'lokesh')
myEvent.emit('error', new Error('whoops! there is an error'))
