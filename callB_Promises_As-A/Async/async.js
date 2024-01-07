function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("this is an api");
            resolve(200)
        }, 2000)
    })
}

async function getData() {
    await api()
    await api()
}

// More on Async Await

function fetchData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId)
            resolve("success")
        }, 2000)
    })
}

async function forData() {
    console.log("Fetching data 1....");
    await fetchData(1)
    console.log("Fetching data 2....");
    await fetchData(2)
    console.log("Fetching data 3....");
    await fetchData(3)
}
