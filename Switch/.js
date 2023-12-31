let day = 3

switch(day) {
    case 1:
        console.log("It's Monday")
        break
    case 2:
        console.log("It's Tuesday")
        break
    case 3:
        console.log("It's Wednessday")
        break
    case 4:
        console.log("It's Thursday")
        break
    case 5:
        console.log("It's Friday")
        break
    case 6:
        console.log("It's Saturday")
        break
    case 7:
        console.log("It's Sunday")
        break
    default:
        console.log(`${day} is not a day!`)
}

let testScore = 83
let letterGrade

switch(true) {
    case testScore >= 90:
        letterGrade = "A"
        break
    case testScore >= 80:
        letterGrade = "B"
        break
    case testScore >= 70:
        letterGrade = "C"
        break
    case testScore >= 60:
        letterGrade = "D"
        break
    default:
        letterGrade = "Failed"
        break
}

console.log(letterGrade)