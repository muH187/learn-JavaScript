// let obj = {
//     a: 1,
//     b: "Ali"
// }
// console.log(obj);

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jump: true
// }
// rabbit.__proto__ = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("The object is created...");
    }
    eats() {
        console.log("Khaha raha hoon");
    }
    jumps() {
        console.log("Kood raha hoon");
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("The object is created and he is a Lion.");
    }
    eats() {
        super.eats()
        console.log("Khaha raha hoon with roaring");
    }
}

let a = new Animal("Harry")
console.log(a);

let l = new Lion("Shera")
console.log(l);