class Honda{
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand_Name = brand
        this.mileage = mileage
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let civic = new Honda("Civic", 15)
console.log(civic);
let city = new Honda("City", 19)
console.log(city);