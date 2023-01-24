"use strict";
class Greeting {
    constructor(greeterName) {
        this.name = greeterName;
    }
    greet() {
        return `Hello ${this.name}!`;
    }
}
let newGreeting = new Greeting("James");
console.log(newGreeting.greet());
