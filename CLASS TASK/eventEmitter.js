const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('start', (name) => {
  console.log(`Started by ${name}`);
});

emitter.on('data', (message) => {
  console.log(`Data received: ${message}`);
});

emitter.on('finish', (result) => {
  console.log(`Finished with result: ${result}`);
});

emitter.emit('start', 'Alice');
emitter.emit('data', 'Hello from EventEmitter');
emitter.emit('finish', 'Success');
