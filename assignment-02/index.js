const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet',(loginMessage)=> {
    setTimeout(() => {
    console.log(`Welcome, ${loginMessage}! You have logged in successfully.`);},0);
});
myEmitter.on('assignment',(assignmentMessage)=> {
    setTimeout(() => {
    console.log(`Assignment submitted successfully by ${assignmentMessage}.`);},0);
});
myEmitter.on('Logout',(LogoutMessage)=> {
    setTimeout(() => {
    console.log(`Goodbye, ${LogoutMessage}! You have Logged out Successfully.`);},0)
});
myEmitter.on('exit',(exitMessage)=> {
    setTimeout(() => {
    console.log(`Thank you, ${exitMessage}! You have exited the system successfully.`);},0);
})
