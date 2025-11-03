


const students:object1[] = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },

];

function findStatus(marks:number):string{
        if(marks<=45){
        return "Fail";
        }
        else{
        return "Pass";
        }
        }

type object1={
    name:string,
    marks:number,
}

let newStudent:object2[]=[];

for(let i=0;i<students.length;i++){
       const status= findStatus(students[i].marks);
       newStudent.push({name:students[i].name,status:status})
}


type object2={
    name:string,
    status:string,
}

console.log(newStudent)
