let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArray = array.reduce((value1, value2)=> {
    return value1 + value2
})
console.log(newArray)

let square = [1, 2, 3, 4, 5]
let newSquare = square.reduce((val1, val2)=> {
    return val1 * val2
})
console.log(newSquare)