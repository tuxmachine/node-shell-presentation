#!/usr/bin/env node
const Crawler = require(".");

const args = process.argv.slice(2);
const [selector, source] = args;
const crawler = new Crawler(source, selector);

crawler
  .fetch()
  .then(() => crawler.parse())
  .then(() => crawler.output());
