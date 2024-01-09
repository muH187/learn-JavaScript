class ToyotaCar{
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand
    }
}

let corolla = new ToyotaCar()
corolla.setBrand("Toyota")