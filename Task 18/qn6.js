function DistributeTasks(employees,tasks){
let newObj={};
let array=[]
for(let i=0;i<employees.length;i++){
  for(let j=0;j<tasks.length;j++){
    newObj={...employees[i]};
  newObj.efftime=tasks[j].time/employees[i].efficiency;
  newObj.task=tasks[j].id;
  array.push(newObj);
  newObj={};
  }
}
console.log(array)
}
DistributeTasks([{ id: "E1", efficiency: 1.0, maxTaskLimit: 2 },{ id: "E2", efficiency: 2.0, maxTaskLimit: 1 }] , 
  [{ id: "T1", time: 4 },{ id: "T2", time: 6 },{ id: "T3", time: 3 }]);