"use strict";
class Animal {
    constructor(animalName) {
        this.name = animalName;
    }
}
class Penguin extends Animal {
    constructor(penguinName) {
        super(penguinName);
        this.canFly = false;
    }
    move() {
        console.log('Waddling along...');
    }
}
class Cow extends Animal {
    constructor(cowName, cowFoodType = "grass") {
        super(cowName);
        this.foodType = cowFoodType;
    }
    move() {
        console.log(`Moooing along.... eating ${this.foodType}`);
    }
}
let bob = new Cow("Bob");
bob.move();
let phil = new Penguin("Phil");
phil.move();
