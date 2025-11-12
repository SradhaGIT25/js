import MultiFieldSorter from './qn4.ts'

const testCases=[{expected : [
  { "name": "bob", "age": 30, "joinDate": "2019-01-12" },
  { "name": "alice", "age": 30, "joinDate": "2020-03-15" },
  { "name": "Bob", "age": 30, "joinDate": "2021-05-10" },
  { "name": "Charlie", "age": 25, "joinDate": "22022-06-01" }
]  , input1 : [
  { name: 'Charlie', age: 25, joinDate: '2022-06-01' },
  { name: 'alice', age: 30, joinDate: '2020-03-15' },
  { name: 'Bob', age: 30, joinDate: '2021-05-10' },
  { name: 'bob', age: 30, joinDate: '2019-01-12' }
] , input2 : [
  { key: 'age', order: 'desc' },
  { key: 'joinDate', order: 'asc' },
  { key: 'name', order: 'asc' }
]},   

{expected : [
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'David', department: 'HR', salary: 60000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Grace', department: 'Finance', salary: 85000 }
] , input1 :[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
], inptu2 :[
  { name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }
]},

{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] , input2 : [] },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] , input2 : "5"},
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : 5 },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : ["1","2","3","4"]},
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : "" },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : ["1,2,3,4"]},
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : true },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : [0] },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : false },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : -3},
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : {} },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : {[]} },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : 0 },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : undefined },
{expected :  false , input1:[
  { key: 'department', order: 'asc' }, 
  { key: 'salary', order: 'desc' },
  { key: 'name', order: 'asc' }
] ,  input2 : null },
{expected :  false  , input1 : [] , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  , input1 : "5" , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : 5  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : ["1","2","3","4"] , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : "" , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : ["1,2,3,4"] , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : true  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : [0]  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : false  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : -3 , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : {}  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : {[]}  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : 0  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : undefined  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }},
{expected :  false  ,  input1 : null  , input2 :{ name: 'Charlie', department: 'Engineering', salary: 80000 },
  { name: 'Bob', department: 'Engineering', salary: 75000 },
  { name: 'Frank', department: 'Engineering', salary: 75000 },
  { name: 'Eve', department: 'Finance', salary: 90000 },
  { name: 'Grace', department: 'Finance', salary: 85000 },
  { name: 'Alice', department: 'HR', salary: 60000 },
  { name: 'David', department: 'HR', salary: 60000 }}];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    expected : number[][] | boolean;
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | number[][] =  MultiFieldSorter(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else{
        for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}