class Person {
    private _name: string = "Nelson";

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName != "") {
            this._name = newName;
        }
    }
}

let Bob = new Person ();
Bob.name = "Bob Bertson";
console.log(Bob.name);