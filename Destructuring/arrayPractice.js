// Array Destructuring Problems:


const fruits = ["Apple", "Orange", "Banana", "Mango"];
const [fruit1, , fruit3] = fruits

console.log(fruit1, fruit3)
// output Apple Banana

let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1]

console.log(num1, num2) 
// output 20 10

const colors = ["Red"]
const [color1, color2 = "Blue"] = colors

console.log(color1, color2)
// output Red Blue

const coordinates = [1, [2, 3]]
const [coordinates1, [coordinates2, coordinates3]] = coordinates
console.log(coordinates1)
console.log(coordinates2)
console.log(coordinates3)



