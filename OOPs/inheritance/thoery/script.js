
class Person {
    constructor() {
        this.species = "Homo sapiens"
    }
    eat() {
        console.log("He is eating an apple");
    }
    sleep() {
        console.log("He is sleeping right now.");
    }
}

class Businessman extends Person {
    constructor(company, networth) {
        super()
        this.networth = networth
        this.company = company
    }
    work() {
        console.log("He provides value to the world.");
    }
}

let ali = new Businessman("Google", "192 Million Dollars")