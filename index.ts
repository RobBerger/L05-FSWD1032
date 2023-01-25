class Animal {
    onTheMove(){
        console.log('The animal is on the move!');
    }
}

class Cat extends Animal {
    meow(){
        console.log('Meow!')
    }
}

let cat = new Cat();
cat.onTheMove();
cat.meow();