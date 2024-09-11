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