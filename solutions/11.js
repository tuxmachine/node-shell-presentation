#!/usr/bin/env node
const { promisify } = require('util');
const childProcess = require('child_process');
const exec = promisify(childProcess.exec);

// Run external commands in Node.js?
const cmd = 'head -n 5 jokes.txt';

exec(cmd).then(({stdout}) => console.log(stdout));

const jokes = readFileSync('./jokes.txt');
const proc = childProcess.spawn('wc', ['-l'], {
  stdio: 'pipe'
});
proc.stdout.pipe(process.stdout);
proc.stdin.write(jokes);
proc.stdin.end();