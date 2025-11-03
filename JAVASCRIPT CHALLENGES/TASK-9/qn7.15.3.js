var students = [
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
];
function findStatus(marks) {
    if (marks <= 45) {
        return "Fail";
    }
    else {
        return "Pass";
    }
}
var newStudent = [];
for (var i = 0; i < students.length; i++) {
    var status_1 = findStatus(students[i].marks);
    newStudent.push({ name: students[i].name, status: status_1 });
}
// const obj1:object1={
//         name:"Alice",
//         marks:42,
//         status:findStatus(students.marks),
// }
// const obj2:object1={
//         name:"Bob",
//         marks:67,
//         status:findStatus(),
// }
// const obj3:object1={
//         name:"Charlie",
//         marks:35,
//         status:findStatus(),
// }
// obj1.status=findStatus(obj1.marks)
// obj2.status=findStatus(obj2.marks)
// obj3.status=findStatus(obj3.marks)
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
console.log(newStudent);
// let array=[obj1,obj2,obj3];
// console.log(array);
