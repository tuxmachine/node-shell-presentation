# HTML2JSON

Small CLI utility to extract data from HTML

## CLI Usage

```sh
npm install --global @tuxmachine/html2json
html2json '#selector' test.html
html2json '.items > li' http://example.org
cat test.html | html2json '#selector'
```

## API

```js
const fs = require("fs");
const Crawler = require("html2json");

// Parse HTML from a file
const file = new Crawler("./test.html", "li");
file
  .fetch()
  .then(() => file.parse())
  .then(() => file.output());

// Parse HTML from a stream
const stream = new Crawler( fs.createReadStream("./test.html"), "li");
stream
  .fetch()
  .then(() => stream.parse())
  .then(() => stream.output());

// Parse HTML from a url
const url = new Crawler("http://example.com", "#someId > h1");
url
  .fetch()
  .then(() => url.parse())
  .then(() => url.output());

```