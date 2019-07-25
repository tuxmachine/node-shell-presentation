#!/usr/bin/env node

const $ = require("cheerio");
const got = require("got");
const fs = require("fs");

class Crawler {
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
  fetch() {
    if (typeof this.source === "string" && /^http/.exec(this.source))
      this.source = got(this.source, { stream: true });
    else if (typeof this.source === "string")
      this.source = fs.createReadStream(this.source);
    return this.getHtmlFromStream();
  }

  getHtmlFromStream() {
    return new Promise((resolve, reject) => {
      let data = "";
      this.source.on("data", chunk => (data += chunk));
      this.source.on("error", error => reject(error));
      this.source.on("end", () => {
        this.html = data;
        resolve(data);
      });
    });
  }

  /** Parse the HTML and get the selection */
  parse() {
    const selection = $.load(this.html)(this.selector);
    this.results = selection
      .map((i, el) =>
        $(el)
          .html()
          .trim()
      )
      .get();
    return this.results;
  }

  /** Output the results to console in JSON format */
  output() {
    console.log(JSON.stringify(this.results));
  }
}

module.exports = Crawler;
