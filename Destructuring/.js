let arr = [2, 4, 12, 100, 23, 43, 53]
// let [a, b, c, d, ...rest] = arr

// console.log(a, b, c, d, ...rest)

let [a, , , , ...rest] = arr

console.log(a, ...rest)