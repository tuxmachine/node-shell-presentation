#!/usr/bin/env node

const argv = require('yargs').argv;

class Greeter {
  constructor(name = 'world') {
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

const greeter = new Greeter();
greeter.sayHello();