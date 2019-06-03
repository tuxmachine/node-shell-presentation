const Crawler = require("..");
const fs = require("fs");

describe("html2json", () => {
  it("should parse CLI arguments", () => {
    let argv = ["#selector", "filename.html"];
    let crawler = Crawler.fromArgv(argv);
    expect(crawler.source).toEqual(argv[1]);
    expect(crawler.selector).toEqual(argv[0]);

    argv = ["#selector"];
    crawler = Crawler.fromArgv(argv);
    expect(crawler.source).toBe(process.stdin);
    expect(crawler.selector).toEqual(argv[0]);
  });

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
