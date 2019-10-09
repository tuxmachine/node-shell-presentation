#!/usr/bin/env node

// Reading data from standard input
let buffer = "";
process.stdin.on("data", chunk => (buffer += chunk));
process.stdin.on("end", () =>
  console.log(`Received a text of ${buffer.split(/ /g).length} words`)
);

// Run: cat jokes.txt | ./09.js
