// const ticket = new Promise(function (resolve, reject) {
//     const isBoarded = false
//     if(isBoarded) {
//         resolve("You are in the flight...")
//     } else {
//         reject("You flight has been cancelled")
//     }
// })

// ticket.then((data) => {
//     console.log("Woohoo!", data);
// }).catch((data) => {
//     console.log("Oh Noo.", data);
// }).finally(() => {
//     console.log("I will always be executed");
// })

function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀"
            resolve(cheese)
        }, 2000);
    })
}

function getDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const dough = cheese + "🍽️"
        resolve(dough)
        }, 2000);
        
    })
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕"
            resolve(pizza)
        }, 2000);
    })
}

async function orderPizza() {
    const cheese = await getCheese()
    console.log("Here is your cheese", cheese);
    const dough = await getDough(cheese)
    console.log("Here is your dough", dough);
    const pizza = await bakePizza(dough)
    console.log("Here is your pizza", pizza);
}

orderPizza()

// getCheese()
//     .then((cheese) => {
//         console.log("Here is your cheese", cheese);
//         return getDough(cheese);
//     })
//     .then((dough) => {
//         console.log("Here is your dough", dough);
//         return bakePizza(dough)
//     })
//     .then((pizza) => {
//         console.log("Here is your pizza", pizza);
//     })
//     .catch((data) => {
//         console.log("Error Occured", data);
//     }).finally(() => {
//         console.log("Process Ended");
//     })