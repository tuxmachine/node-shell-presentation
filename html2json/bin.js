#!/usr/bin/env node
const Crawler = require(".");

if (process.argv.length <= 2 || process.argv.some(s => /-h|--help/.test(s))) {
  console.log("USAGE");
  console.log(
    "    From url:    html2json #selector http://example.org/file.html"
  );
  console.log("    From file:   html2json #selector file.html");
  console.log("    From stdin:  cat test.html | html2json #selector");
  process.exit(1);
}


let source = process.stdin;
let selector = null;
const args = process.argv.slice(2);
if (args.length > 1) {
  [selector, source] = args;
} else {
  [selector] = args;
}

const crawler = new Crawler(source, selector);
crawler.fetch().then(() => {
  crawler.parse();
  crawler.output();
});