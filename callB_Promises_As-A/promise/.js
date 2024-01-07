function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("success")
        }, 4000)
    })
} 

console.log("fetching some data...")

let p1 = promise()

p1.then((res) => {
    console.log(res)
})
