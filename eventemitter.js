const EventEmitter = require('events'); //class

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to the Node.js EventEmitter example.`);
});

myEmitter.on('exit', () => {             //object 
  console.log('Application Closed.');
});

myEmitter.emit('greet', '2nd Year Student');
myEmitter.emit('exit'); // emit is used to trigger the event and call the associated listener functions.
