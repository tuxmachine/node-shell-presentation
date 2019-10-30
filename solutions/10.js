#!/usr/bin/env node

const argv = require("yargs")
  .alias('p', 'pirate')
  .describe('pirate', 'Greet like a pirate')
  .boolean('pirate')
  .demandCommand().argv;

class Greeter {
  constructor(name) {
    this.greeting = 'Hello';
    this.name = name;
  }

  sayHello() {
    console.log(`${this.greeting} ${this.name}`)
  }

  becomePirate() {
    this.greeting = 'Ahoi';
  }
}

const greeter = new Greeter(argv._[0]);
if (argv.pirate)
  greeter.becomePirate();
greeter.sayHello();