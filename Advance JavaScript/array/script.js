let array = [1, 2, 3, 4]

// array.forEach((val) => {
//     console.log(val + " Hello")
// })

// let newArray = array.map(function(val){
//     return val * 3
// })

// console.log(newArray)

// let ans = array.filter(function(val){
//     if(val >= 3) {return true}
//     else return false
// })
// console.log(ans)

let ans = array.find(function(val){
    if(val === 5){
        return val
    }
})
console.log(ans)