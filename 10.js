#!/usr/bin/env node

const argv = require('yargs').argv;

class Greeter {
  constructor() {
    this.greeting = 'Hello';
  }

  sayHello() {
    console.log(`${this.greeting} ${this.name}`)
  }

  becomePirate() {
    this.greeting = 'Ahoi';
  }
}

const greeter = new Greeter();
greeter.sayHello();