{
    for ( let i = 1; i <= 5; i++){
        let pattern = ""
        for (let j = 1; j <= 5; j++) {
            pattern += "*"
        }
        console.log(pattern)
    }
}
{
    for (let i = 1; i <= 5; i++) {
        let pattern = ""
        for (let j = 1; j <= i; j++) {
            pattern += "*"
        }
        console.log(pattern)
    }
}
{
    for (let i = 1; i <= 5; i++) {
        let pattern = "";
        for (let j = 0; j < 5 - i; j++) {
            pattern += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}
console.log("reverse pyramid")
{
    for (let i = 5; i >= 1; i--) {
        let pattern = ""
        for (let j = 1; j <= 5 - i; j++){
            pattern += " "
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*"
        }
        console.log(pattern)
    }
}

console.log("Diamond Pattern")

{
    let n = 5
    for (let i = 1; i <= n; i++) {
        let pattern = ""
        for (let j = 0; j < n - i; j++) {
            pattern += " "
        }
        for (let k = 0; k <  2 * i - 1; k++) {
            pattern += "*"
        }
        console.log(pattern)
    }
    for (let i = n - 1; i >= 1; i--) {
        let pattern = ""
        for (let j = 0; j < n - i; j++) {
            pattern += " "
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pattern += "*"
        }
        console.log(pattern)
    }

}