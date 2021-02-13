function task() {
    const name = 'Task 1';
    console.log(`Task function: ${name} - start`);
    printName(name);
    console.log(`Task function: ${name} - end`);
}

function printName(name) {
    console.log(`Task function: printing... ${name}`);
}

function callStack() {
    debugger
    task();
}

function timer(seconds = 1) {
    console.log(`Timer function: ${seconds}s - start`);
    setTimeout(() => console.log(`Timer function: ${seconds}s is over `), seconds*1000);
    console.log(`Timer function: ${seconds}s - end`);
}

function eventLoop() {
    debugger
    timer(2);
    task();
}
