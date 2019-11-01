#!/usr/bin/env node
const childProcess = require('child_process');
const fs = require('fs');

// Run external commands in Node.js?
const cmd = 'head -n 5 jokes.txt';
