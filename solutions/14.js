#!/usr/bin/env node
const args = require("yargs")
  .boolean("minor")
  .boolean("major")
  .boolean("patch").argv;

const fs = require("fs");
const git = require("simple-git/promise")(__dirname);

gitRelease(bumpVersion());


async function gitRelease(version) {
  console.log("=> Create release commit");
  await git.commit(`Release version ${version}`, ['package.json']);
  console.log("=> Tagging commit");
  await git.addTag(`release/${version}`);
}

function bumpVersion() {
  console.log("=> Bumping version");
  const package = require("./package.json");
  const version = package.version.split(".").map(i => parseFloat(i));

  if (args.patch) version[2]++;
  else if (args.minor) version[1]++;
  else if (args.major) version[0]++;

  package.version = version.map(i => `${i}`).join(".");
  fs.writeFileSync("package.json", JSON.stringify(package, null, 2));
}
