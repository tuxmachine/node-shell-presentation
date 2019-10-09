#!/usr/bin/env node

const Crawler = require(".");

const source = "./test.html";
const selector = "li";

const crawler = new Crawler(source, selector);
crawler
  .fetch()
  .then(() => crawler.parse())
  .then(() => crawler.output());
