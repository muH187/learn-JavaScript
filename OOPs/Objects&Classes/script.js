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

const zohaib = {
    salary: 50000
}

zohaib.__proto__ = employee