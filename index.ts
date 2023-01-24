class Greeting {
    name: string;

    constructor(greeterName: string) {
        this.name = greeterName;
    }

    greet(): string {
        return `Hello ${this.name}!`;
    }
}

let newGreeting = new Greeting("James");
console.log(newGreeting.greet());