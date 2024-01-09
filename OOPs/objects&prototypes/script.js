const student = {
    fullName: "Muhammad Ali",
    marks: 98.3,
    printMarks: function() {
        console.log("Marks", this.marks);
    }
}

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}

let zohaib = {
    salary: 50000,
    calcTax() {
        console.log("Tax rate is 20%");
    }
}

zohaib.__proto__ = employee