"use strict";
class Person {
    constructor() {
        this._name = "Nelson";
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName != "") {
            this._name = newName;
        }
    }
}
let Bob = new Person();
Bob.name = "Bob Bertson";
console.log(Bob.name);
