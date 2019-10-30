const { promisify } = require('util');
const childProcess = require('child_process');
const exec = promisify(childProcess.exec);

// Run external commands in Node.js?
const cmd = 'head -n 5 jokes.txt';

exec(cmd).then(({stdout}) => console.log(stdout));