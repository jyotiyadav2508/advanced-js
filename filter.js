// ------------------------------------Simplw filtering----*
const people = [{
        name: "Anna",
        age: 21
    },
    {
        name: "Tim",
        age: 28
    },
    {
        name: "Sofia",
        age: 16
    }
]
const oldEnough = people.filter(person => person.age >= 18);
console.log(oldEnough)

const sofia = people.filter(p => p.name === "Sofia");
console.log(sofia)

const guest = people.filter(p => p.name === "Tim")[0]; //use index to access the object itself
console.log(guest)

//----------------------------------------Complex filtering---------------*
const student = [{
        id: 1,
        name: "Mark",
        profession: "Developer",
        skills: [{
                name: "HTML",
                yrsExperience: 1
            },
            {
                name: "CSS",
                yrsExperience: 3
            },
            {
                name: "JavaScript",
                yrsExperience: 3
            }
        ]
    }, {
        id: 2,
        name: "Jimmy",
        profession: "Developer",
        skills: [{
                name: "HTML",
                yrsExperience: 4
            },
            {
                name: "CSS",
                yrsExperience: 4
            },
            {
                name: "JavaScript",
                yrsExperience: 4
            }
        ]
    },
    {
        id: 3,
        name: "Leo",
        profession: "Developer",
        skills: [{
                name: "HTML",
                yrsExperience: 2
            },
            {
                name: "CSS",
                yrsExperience: 2
            },
            {
                name: "JavaScript",
                yrsExperience: 1
            }
        ]
    }
];
/* Goal is to create a list of candidates by filtering out any students who  
don’t have at least 3 years of experience  in at least one skill. */


// const candidates = student.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 3);
//     return strongSkills.length > 0;
// });
// console.log(candidates)

// Extract the whole filter function into its own function, Like hasStrongSkills
const has3yearExp = skill => skill.yrsExperience >= 3;
const hasStrongSkills = student => student.skills.filter(has3yearExp).length > 0;
const candidate = student.filter(hasStrongSkills);
console.log(candidate)