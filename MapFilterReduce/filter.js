let arr = [100, 92, 193, 200, 53, 230, 54, 19, 20, 84, 82, 99, 31]
let newArray = arr.filter((value)=> {
    return value < 100
})
console.log(newArray)