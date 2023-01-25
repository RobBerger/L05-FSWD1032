"use strict";
// class Person {
//     private _name: string = "Nelson";
//     get name(): string {
//         return this._name;
//     }
//     set name(newName: string) {
//         if (newName != "") {
//             this._name = newName;
//         }
//     }
// }
// let Bob = new Person ();
// Bob.name = "Bob Bertson";
// console.log(Bob.name);
class Counter {
    static increment() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.count = 0;
for (let i = 0; i < 10; i++) {
    Counter.increment();
}
console.log(`Count: ${Counter.getCount()}`);
