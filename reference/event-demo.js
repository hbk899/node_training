const EventEmitter = require('events')
class MyEmitter extends EventEmitter { }
const Emitter = new MyEmitter()

Emitter.on('event', () => console.log('Event Fired'))


Emitter.emit('event')