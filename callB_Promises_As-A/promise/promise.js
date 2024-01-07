let promise = new Promise((resolve, reject) => {
    console.log("I'm promise")
    resolve()
})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm promise");
        // resolve()
        reject()
    })
}

let result = getPromise()

result.then(() => {
    console.log("promise success");
})
result.catch(() => {
    console.log("error");
})