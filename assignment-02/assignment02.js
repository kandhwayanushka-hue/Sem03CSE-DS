const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (loginMessage) => {
    console.log(`Welcome, ${loginMessage}! You have logged in successfully.`);

    setTimeout(() => {
        console.log("setTimeout: Greet task completed after 2 seconds");
    }, 2000);

    setImmediate(() => {
        console.log("setImmediate: Greet task is ready");
    });

    process.nextTick(() => {
        console.log("nextTick: Checking greet task status");
    });
});

myEmitter.on('assignment', (assignmentMessage) => {
    console.log(`Assignment submitted successfully by ${assignmentMessage}.`);

    setTimeout(() => {
        console.log("setTimeout: Assignment task completed after 3 seconds");
    }, 3000);

    setImmediate(() => {
        console.log("setImmediate: Assignment task is ready");
    });

    process.nextTick(() => {
        console.log("nextTick: Checking assignment status");
    });
});

myEmitter.on('Logout', (LogoutMessage) => {
    console.log(`Goodbye, ${LogoutMessage}! You have Logged out Successfully.`);

    setTimeout(() => {
        console.log("setTimeout: Logout task completed after 4 seconds");
    }, 4000);

    setImmediate(() => {
        console.log("setImmediate: Logout task is ready");
    });

    process.nextTick(() => {
        console.log("nextTick: Checking logout status");
    });
});

myEmitter.on('exit', (exitMessage) => {
    console.log(`Thank you, ${exitMessage}! You have exited the system successfully.`);

    setTimeout(() => {
        console.log("setTimeout: Exit task completed after 5 seconds");
    }, 5000);

    setImmediate(() => {
        console.log("setImmediate: Exit task is ready");
    });

    process.nextTick(() => {
        console.log("nextTick: Checking exit status");
    });
});
myEmitter.emit('greet', '2nd year CSE(DS) student');
myEmitter.emit('assignment', '2nd year CSE(DS) student');
myEmitter.emit('Logout', '2nd year CSE(DS) student');
myEmitter.emit('exit', '2nd year CSE(DS) student');