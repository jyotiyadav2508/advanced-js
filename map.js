// ---------------------------------Using a for loop----------*
let nums = [1, 2, 3, 4, 5];
let result = [];
for (let num of nums) {
    result.push(num * 2);
}
console.log(result)


//-----------------------------------------Using map method----*
const multiByTwo = function(num) {
    return num * 2;
}
const mapResult = nums.map(multiByTwo);
console.log(mapResult)


//--------------------------------------Simplified map()-----*
const simplified = nums.map(function(num) {
    return num * 2
})
console.log(simplified)



//----------------------------Simplified map() + Arrow function---*

const arrow = nums.map(num => num * 2)
console.log(arrow)



//------------------------------------------------ With Objects---*
const students = [{
        id: 1,
        name: "mark",
        profrssion: "developer",
        skills: "jave script"
    },
    {
        id: 2,
        name: "marry",
        profession: "developer",
        skills: 'HTML'
    },
    {
        id: 3,
        name: "manya",
        profrssion: "developer",
        skills: "python"
    },
    {
        id: 4,
        name: "manas",
        profession: "developer",
        skills: 'react'
    }
]
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds)