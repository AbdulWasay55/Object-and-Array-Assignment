;
var students = [
    { name: "Talha", isSenior: true, hasCompletedAssignments: true },
    { name: "Ahmed", isSenior: false, hasCompletedAssignments: false },
    { name: "Asad", isSenior: true, hasCompletedAssignments: true },
    { name: "Riyan", isSenior: false, hasCompletedAssignments: false },
];
function findSeniorStudent(students) {
    if (students.isSenior === true && students.hasCompletedAssignments === true) {
        console.log("".concat(students.name, " IS THE SENIOR STUDENT AND THE ASSIGNMENT OF ").concat(students.name, " IS COMPLETED"));
    }
    else if (students.isSenior === false && students.hasCompletedAssignments === false) {
        console.log("".concat(students.name, " IS NOT SENIOR STUDENT AN THE ASSIGNMENT OF ").concat(students.name, " IS NOT COMPLET "));
    }
}
function removeStudent(students) {
    console.log(students.filter(function (student) { return student.hasCompletedAssignments; }));
}
findSeniorStudent(students[1]);
removeStudent(students);
