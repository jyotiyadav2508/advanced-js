// -----------------------------------------------------Rest Parameter---*

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum1 = sumAll(1, 2, 3)
console.log("Sum is: ", sum1)


// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6)
console.log("Sum is: ", sum2)


// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log("Total sum is: ", sum3)