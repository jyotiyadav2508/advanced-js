// Summing an array of numbers
const nums1 = [0, 1, 2, 3, 4]
let sum1 = nums1.reduce((pre, curr) => {
    console.log(
        "Previous Value: ", pre,
        "Current value: ", curr,
        "Total: ", pre + curr);
    return pre + curr;
});
console.log(sum1)


// Provide initial value
const nums2 = [0, 1, 2, 3, 4]
let sum2 = nums2.reduce((pre, curr) => {
    console.log(
        "Previous Value: ", pre,
        "Current value: ", curr,
        "Total: ", pre + curr);
    return pre + curr;
}, 10); // Initial value 10
console.log(sum2)
//Alternate
const nums3 = [0, 1, 2, 3, 4]
let sum3 = nums3.reduce((pre, curr) => pre + curr, 10);
// define initial value 10, by default it is first element of array
console.log(sum3)


//Totaling the value of a specific property in an array of objects.
const teamMembers = [{
        name: "max",
        profession: "Developer",
        yrsExperience: 7

    },
    {
        name: "Lorik",
        profession: "Designer",
        yrsExperience: 5
    },
    {
        name: "Leo",
        profession: "Developer",
        yrsExperience: 4
    }
]
let totalExperience = teamMembers.reduce((pre, curr) => pre + curr.yrsExperience, 0);
// Must define initial value, otherwise it take first element of array which is an object. Remove 0 and try
console.log("Total Experience is: ", totalExperience)


//Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((pre, curr) => {
    let key = curr.profession;
    if (!pre[key]) {
        pre[key] = curr.yrsExperience;
    } else {
        pre[key] += curr.yrsExperience
    }
    return pre;
}, {});
console.log(experienceByProfession)