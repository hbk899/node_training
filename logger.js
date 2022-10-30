const EventEmitter = require('events')
const uuid = require('uuid')
class Logger extends EventEmitter {

    log(msg) {

        this.emit('message', { id: uuid.v4(), msg })
    }
}


// module.exports = Logger;


const logger = require('./logger')


const log = new logger()

log.on('message', data => console.log('Called  Listener', data))

log.log('hello  ')