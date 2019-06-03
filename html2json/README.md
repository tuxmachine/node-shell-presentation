# HTML2JSON

Small CLI utility to extract data from HTML

## Usage

```sh
npm install --global @fm/html2json
html2json '#selector' test.html
html2json '.items > li' http://example.org
cat test.html | html2json '#selector'
```