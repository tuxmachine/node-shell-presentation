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
greeter.sayHello();
