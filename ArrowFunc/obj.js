const person = {
    name: "Ali",
    age: 19,
    exp: 3,
    role: "Software Developer",
    // show: function() {
    //     let that = this
    //     setTimeout(function() {
    //         console.log(`The name is ${that.name} and the age is ${that.age}.`)
    //     }, 2000);
        
    // }
    show: function() {
        setTimeout(() => {
            console.log(`The name is ${this.name} and the age is ${this.age}.`)
        }, 2000);
        
    }
}
console.log(person.name, person.exp, person.role)
person.show()