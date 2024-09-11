{
    function sum(num1, num2) {
        return num1 + num2
    }
    console.log(sum(10, 100)) // Output 110
}

{
    function evenOrOdd(number) {
        if(number % 2) {
            return "Odd"
        } else {
            return "Even"
        }
    }
    console.log(evenOrOdd(9))
}

{
    function largestNumber(array) {
        return array.reduce((largest, current) => 
        (current > largest ? current : largest), array[0])
    }
    let array = [100, 400, 51, 399, 511, 20]
    console.log(largestNumber(array))
}
{
    function largestNumber(array) {
        return Math.max(...array)
    }
    let array = [12, 32, 64, 19, 94, 10]
    console.log(largestNumber(array))
}
{
    function largestNumber(array) {
        let largest = array[0]
        for (let i = 1; i < array.length; i++){
            if(array[i] > largest) {
                largest = array[i]
            }
        }
        return largest
    }
    let array = [10, 20, 30, 14, 29, 33, 83]
    console.log(largestNumber(array))
}
{
    function largestNumber(array) {
        array.sort((a, b) => a - b)
        return array[array.length - 1]
    }
    let array = [12, 32, 64, 19]
    console.log(largestNumber(array))
}
{
    const array = [12, 32, 64, 13, 30, 4, 22]
    let largest = array[0]
    array.forEach(element => {
        if(element > largest) {
            largest = element
        }
    })
    console.log(`Largest: ${largest}`)
}