// 3. Given:
// const students = [
//   { name: "Alice", marks: 42 },
//   { name: "Bob", marks: 67 },
//   { name: "Charlie", marks: 35 },
// ];
// Create a new array:
// [
//   { name: "Alice", status: "Fail" },
//   { name: "Bob", status: "Pass" },
//   { name: "Charlie", status: "Fail" },
// ]

// SOLUTION:

let status="";
const students = [
  { name: "Alice", marks: 42 },
  { name: "Bob", marks: 67 },
  { name: "Charlie", marks: 35 },

];

function findStatus(marks){
        if(marks<=45){
        return "Fail";
        }
        else{
        return "Pass";
        }
        }

const obj1={
        name:"Alice",
        marks:42,
        status:findStatus(),
}

const obj2={
        name:"Bob",
        marks:67,
        status:findStatus(),
}

const obj3={
        name:"Charlie",
        marks:35,
        status:findStatus(),
        
}

obj1.status=findStatus(obj1.marks)
obj2.status=findStatus(obj2.marks)
obj3.status=findStatus(obj3.marks)

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

let array=[obj1,obj2,obj3];
console.log(array);

