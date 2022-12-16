// -----------------Vanilla Java Script function-------------------*
function addTwoNumbers1(a, b) {
    return a + b;
}
let sum1 = addTwoNumbers1(3, 5)
console.log(sum1)


//-------------Arrow function with parameters ( ES6 function)---------*
const addTwoNumbers2 = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(3, 5)
console.log(sum2)


// -----------Single line arrow function with parameters--------------*
const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3(2, 3)
console.log(sum3)


//-----------------------Implicit returns--------------*
const saySomething1 = message => console.log(message); //one parameter 'message'
saySomething1("Hello there!")

const saySomething2 = () => console.log("Hi") // No parameter
saySomething2()


// ---------------Returning multiple lines----------------------*
const returnMultipleLines = () => (
    `<p>
    Hi,
    Good morning,
    I am Jyoti Yadav
    </p>`
)
console.log(returnMultipleLines())