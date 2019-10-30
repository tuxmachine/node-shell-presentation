
const sh = require('shelljs');

// Run external commands in Node.js?
const head = sh.head({ '-n': 5 }, 'jokes.txt')
console.log(head.stdout);