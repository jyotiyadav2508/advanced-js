//-------------------------Destructing Arrays--------------*
let ages = [30, 28, 34];
// let john = ages[0]
// let jimmy = ages[1]
// let jay = ages[2]
let [john, jimmy, jay] = ages; //ES6 Destructuring assignment
console.log(john, jimmy, jay);


// -------------------------Destructuring Objects---------*
let jobs = {
    Aman: "designer",
    Namam: "developer",
    jnam: "manager"
};
let {
    Aman,
    Namam,
    jnam
} = jobs;
console.log(Aman, Namam, jnam);

// -------------------------Destructuring Subsets---------*

let languages = ["english", "french", "spainsh", "german", "japnees"]
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

let [, , marryNative, marrySecondary] = languages;
console.log(marryNative, marrySecondary) // Use two commas to skip first two languages

let languages2 = {
    firstLanguage: "hindi",
    secondLanguage: "english",
    thirdLanguage: "marathi"

};
let {
    firstLanguage,
    thirdLanguage
} = languages2;
console.log(firstLanguage, thirdLanguage)



//---------------------------------------Using rest parameter syntax-----*

let fruits = ["apple", "mango", "banana", "grapes", "kiwi", "papaya"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite)
console.log(secondFavorite)
console.log(others)