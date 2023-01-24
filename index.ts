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
    name: string;

    constructor(animalName: string) {
        this.name = animalName;
    }
}

class Cow extends Animal{
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 2) {
        console.log(`${this.name} moved ${distance} units.`);
    }
}

let bob = new Cow("Bob");
bob.move();