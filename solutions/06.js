#!/usr/bin/env node

const fs = require("fs");

// fs.readFile("./lorem.txt", "utf8", (err, data) => console.log(data));
fs.createReadStream("./jokes.txt").pipe(process.stdout);

process.on("beforeExit", () => {
  const mem = process.memoryUsage();
  const totalMem = Math.round(mem.heapUsed / 1000) / 1000;
  console.log("\n\n");
  console.log("Memory usage (Mb):", totalMem);
});
