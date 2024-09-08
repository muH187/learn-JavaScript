let sum = 0; // Initialize the sum to 0

for (let i = 1; i <= 100; i++) {
    sum += i; // Add the current number to the sum
}

console.log("The sum of numbers from 1 to 100 is:", sum);


let count = 0

for (let i = 1; i < 5; i++) {
    count += i
}
console.log(count)

{
    let table = 7
    for (let i = 1; i < 11; i++) {
        console.log(`7 x ${i} = ${i * 7}`)
    }
}
{
    for (let i = 2; i < 21; i += 2) {
        console.log(i)
    }
}
{
    let factorial = 1
    for (let i = 1; i < 8; i++) {
        factorial *= i
    }
    console.log(`The factorial of 7 is: ${factorial}`)
}
{
    let string = "Hello"
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    console.log(reversed)
}
{
    let fruits = ["Mango", "Banana", "Kivi", "Pineapple"]
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }

}
{
    for (let i = 1; i <= 3; i++) {

        for (let j = 1; j <= 3; j++) {
            console.log(`i = ${i}, j = ${j}`)
        }

    }
}
{
    for (let i = 1; i < 6; i++) {
        let pattern = ""
        
        for (j = 1; j < i; j++) {
            pattern += "*"
        }
        console.log(pattern)

    }
    
}
console.log("reverse stars")
{
    for (let i = 6; i > 0; i--) {
        let pattern = ""
        
        for (j = i; j > 0; j--) {
            pattern += "*"
        }
        console.log(pattern)

    }
    
}