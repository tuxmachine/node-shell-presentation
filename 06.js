#!/usr/bin/env node

setTimeout(process.exit, 0);
printLargeText();

function printLargeText() {
  let text = Array(100000)
    .fill(0)
    .reduce((str, n, i) => `${str + i}\n`, "");
  console.log(text);
  console.log("DONE");
}
