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

// stdout is synchronous in TTY but asynchronous in pipes (reversed on Windows)
//
// So the eventloop *may* kick-in, interrupting the text output, depending on
// your invocation
