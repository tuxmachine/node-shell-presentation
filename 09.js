const fs = require("fs");
const Crawler = require("./html2json/index");

// Parse HTML from a file
const file = new Crawler("./html2json/spec/test.html", "li");
file
  .fetch()
  .then(() => file.parse())
  .then(() => file.output());

// Parse HTML from a stream
const stream = new Crawler( fs.createReadStream("./html2json/spec/test.html"), "li");
stream
  .fetch()
  .then(() => stream.parse())
  .then(() => stream.output());

// Parse HTML from a url
const url = new Crawler("http://mijnip.nl", "#remoteIPDiv");
url
  .fetch()
  .then(() => url.parse())
  .then(() => url.output());
