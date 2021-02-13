function hello() {
    console.log('hello');
}

function world() {
    console.log('world');
}

function main() {
    hello();
    world();
}

debugger
main();

function asyncHello() {
    console.log('function: starts');
    setTimeout(() => console.log('async function: hello'), 1000);
    console.log('function: ends');
}

asyncHello();
