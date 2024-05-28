interface Student{
    name:string;
    isSenior:boolean;
    hasCompletedAssignments:boolean;
};
let students :Student[]=[
    {name:"Talha",isSenior:true,hasCompletedAssignments:true},
    {name:"Ahmed",isSenior:false,hasCompletedAssignments:false},
    {name:"Asad",isSenior:true,hasCompletedAssignments:true},
    {name:"Riyan",isSenior:false,hasCompletedAssignments:false},
]

function findSeniorStudent(students:Student){  
if(students.isSenior===true&&students.hasCompletedAssignments===true){
    console.log(`${students.name} IS THE SENIOR STUDENT AND THE ASSIGNMENT OF ${students.name} IS COMPLETED`);
}
else if(students.isSenior===false&&students.hasCompletedAssignments===false){
    console.log(`${students.name} IS NOT SENIOR STUDENT AN THE ASSIGNMENT OF ${students.name} IS NOT COMPLET `);
}
    }
    function removeStudent(students: Student[]) {
        console.log( students.filter(student => student.hasCompletedAssignments));
    }
    
    

findSeniorStudent(students[1])

removeStudent(students)