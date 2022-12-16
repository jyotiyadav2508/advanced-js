// ---------------------------------------------------------Spread operator--*
let arr1 = [1, 2, 3, 4]
let arr2 = arr1
arr2.push(5)
console.log("First array is: ", arr1)
console.log("Second array is: ", arr2)


// ---------------------------------Coping an Array---------------*
let arr3 = [5, 6, 7, 8]
let arr4 = [...arr3] // Spread operator with three dots
arr4.push(9, 10)
console.log("Third array is: ", arr3)
console.log("Fourth array is: ", arr4)


// -------------------------------Coping an Object----------------*
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
let obj2 = {
    ...obj1,
    d: 4,
    e: 5
};
let obj3 = {
    ...obj1,
    b: 5 //Overriding value of b in obj1
}
console.log("First Object is: ", obj1)
console.log("Second Object is: ", obj2)
console.log("Third object is: ", obj3)

// ---------------------Coping only part of Array/Object-----------*
let arr5 = [...arr1, {
    ...obj1
}, ...arr3, "x", "y", "z"];
console.log("Fifth Array is: ", arr5)