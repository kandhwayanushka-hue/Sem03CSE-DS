const { EventEmitter } = require('events');
class Button extends EventEmitter {}   // new class is created using base class we are inheriting the properties of EventEmitter class
const button = new button();
button.on('click', () => console.log('Button clicked!'));  //on method is used to register an event listener for the 'click' event   // obect.method and the method is on 
button.on('mouseover' , () => console.log('Mouse is over the button.'));
button.emit('click');
button.emit('mouseover');
