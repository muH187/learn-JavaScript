let data = "This is some secret data"

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    viewData() {
        console.log("data = ", data);
    }
}

let ali = new User("Ali", "proqualitythings100@gmail.com")
let bilal = new User("Bilal", "bilal@gmail.com")
let mirza = new User("Mirza", "mirza@gmail.com")