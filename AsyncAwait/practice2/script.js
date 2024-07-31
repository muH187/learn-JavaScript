async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}

async function main(){
    console.log("Hey")
    console.log("My name is Muhammad Ali")
    let data = await getData()
    console.log(data)
    console.log("We will go to swimming pool tomorrow")
    console.log("InshaAllah")
}
main()
