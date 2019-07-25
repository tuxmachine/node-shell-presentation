const Crawler = require("..");
const fs = require("fs");

describe("html2json", () => {
  it("should parse from file", () => {
    const crawler = new Crawler("spec/test.html", "li");
    return crawler.fetch().then(() => {
      crawler.parse();
      expect(crawler.results).toEqual(["Apple", "Orange", "Pear"]);
    });
  });

  it("should parse from url", () => {
    const crawler = new Crawler("http://mijnip.nl", "#remoteIPDiv");
    const ipRegex = /^\d+\.\d+\.\d+\.\d+$/;
    return crawler.fetch().then(() => {
      crawler.parse();
      expect(crawler.results[0]).toMatch(ipRegex);
    });
  });

  it("should parse from stream", () => {
    const crawler = new Crawler(
      fs.createReadStream(__dirname + "/test.html"),
      "li"
    );
    return crawler.fetch().then(() => {
      crawler.parse();
      expect(crawler.results).toEqual(["Apple", "Orange", "Pear"]);
    });
  });
});
