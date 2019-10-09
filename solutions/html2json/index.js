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
  static fromArgv(args) {
    let source = process.stdin;
    let selector = null;
    if (args.length > 1) {
      [selector, source] = args;
    } else {
      [selector] = args;
    }
    return new Crawler(source, selector);
  }

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

if (require.main === module) {
  if (process.argv.length <= 2 || process.argv.some(s => /-h|--help/.test(s))) {
    console.log("USAGE");
    console.log(
      "    From url:    html2json #selector http://example.org/file.html"
    );
    console.log("    From file:   html2json #selector file.html");
    console.log("    From stdin:  cat test.html | html2json #selector");
    process.exit(1);
  }
  const crawler = Crawler.fromArgv(process.argv.slice(2));
  crawler.fetch().then(() => {
    crawler.parse();
    crawler.output();
  });
}
