class Animal {
    name: string;

    constructor(animalName: string) {
        this.name = animalName;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} units.`);
    }
}

class Cow extends Animal{
    constructor(name: string){
        super(name);
    }

    move(distance = 2) {
        console.log('Mooing along....');
        super.move(distance);
    }
}

let Bob = new Cow("Bob");
Bob.move();