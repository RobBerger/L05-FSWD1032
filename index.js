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
// class Counter {
//     private static count = 0;
//     static increment(){
//         Counter.count++;
//     }
//     static getCount(){
//         return Counter.count;
//     }
// }
// for (let i = 0; i < 10; i++){
//     Counter.increment();
// }
// console.log(`Count: ${Counter.getCount()}`);
class Circle {
    constructor(r) {
        this.radius = r;
    }
    getArea() {
        return Circle.PI * this.radius * this.radius;
    }
}
Circle.PI = 3.14;
let myCircle = new Circle(10);
console.log(myCircle.getArea());
