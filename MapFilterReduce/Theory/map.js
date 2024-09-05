let arr = [2001, 2002, 2003, 2004]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + 1
})
console.log(a)