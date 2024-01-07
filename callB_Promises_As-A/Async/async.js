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
