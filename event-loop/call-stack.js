function task(name = 'My task') {
    printTask(name);
    finishTask(name);
}

function printTask(name) {
    console.log(`${name} printed`);
}

function finishTask(name) {
    console.log(`${name} finished`);
}

function timer(seconds = 1) {
    setTimeout(() => task(`Timer Task ${seconds}s`), seconds*1000);
}

function eventLoop() {
    timer(10);
    timer(1);
    Promise.resolve().then(() => task('Promise Task'));
    task('Sync Task');
}

eventLoop();
