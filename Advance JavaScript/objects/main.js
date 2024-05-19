let obj = {
    name: "Muhammad Ali",
    age: 19,
    profession: "Programmer",
    networth: "192 Million Dollars"
}

Object.freeze(obj)
obj.networth = "200 Million Dollars"
console.log(obj.networth)