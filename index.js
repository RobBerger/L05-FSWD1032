"use strict";
class Animal {
    constructor(animalName) {
        this.name = animalName;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance} units.`);
    }
}
class Cow extends Animal {
    constructor(name) {
        super(name);
    }
    move(distance = 2) {
        console.log('Mooing along....');
        super.move(distance);
    }
}
let Bob = new Cow("Bob");
Bob.move();
