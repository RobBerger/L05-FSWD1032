abstract class Animal {
    name: string;

    constructor(animalName: string) {
        this.name = animalName;
    }

    abstract move(): void;
}

class Penguin extends Animal {
    canFly: boolean = false;

    constructor(penguinName: string){
        super(penguinName);
    }

    move() {
        console.log('Waddling along...');
    }
}

class Cow extends Animal {
    foodType: string;

    constructor(cowName: string, cowFoodType: string = "grass") {
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