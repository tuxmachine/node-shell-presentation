#!/usr/bin/env node

const $ = require("cheerio");
const got = require("got");
const fs = require("fs");

class Crawler {
  /**
   * Construct a crawler from the CLI arguments
   *
   * @param {String[]} args List of arguments given on the CLI
   * @returns {Crawler} Returns new instance of crawler
   */
  static fromArgv(args) {}

  /**
   * Creates an instance of Crawler.
   *
   * @param {String|ReadableStream} source The HTML source, can be a filename, URL or a stream to read from
   * @param {String} selector A valid CSS selector
   * @memberof Crawler
   */
  constructor(source, selector) {
    this.source = source;
    this.selector = selector;
  }

  /** Fetch the HTML from the source */
  fetch() {}

  /** Parse the HTML and get the selection */
  parse() {}

  /** Output the results to console in JSON format */
  output() {}
}

module.exports = Crawler;
