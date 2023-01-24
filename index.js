"use strict";
// class Greeting {
//     name: string;
//     constructor(greeterName: string) {
//         this.name = greeterName;
//     }
//     greet(): string {
//         return `Hello ${this.name}!`;
//     }
// }
// let newGreeting = new Greeting("James");
// console.log(newGreeting.greet());
class Animal {
    constructor(animalName) {
        this.name = animalName;
    }
}
class Cow extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance = 2) {
        console.log(`${this.name} moved ${distance} units.`);
    }
}
let bob = new Cow("Bob");
bob.move();
