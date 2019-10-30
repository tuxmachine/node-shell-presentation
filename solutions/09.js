#!/usr/bin/env node

class Greeter {
  constructor() {
    this.greeting = 'Hello';
    this.name = 'world';
  }

  sayHello() {
    console.log(`${this.greeting} ${this.name}`)
  }

  becomePirate() {
    this.greeting = 'Ahoi';
  }
}

const greeter = new Greeter();
process.argv.slice(2).forEach(arg => {
  if (arg === '--pirate')
    greeter.becomePirate();
  else if (!arg.startsWith('-')) {
    greeter.name = arg;
  }
});
greeter.sayHello();
