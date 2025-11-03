
function modifiedObj(obj1){
console.log(obj1);
copyobj1={...obj1};
console.log(copyobj1);
copyobj2=Object.assign(obj1);
console.log(copyobj2);

obj1.name="shilpa"; 

console.log(obj1);
console.log(copyobj1);
console.log(copyobj2);

if(obj1===copyobj1){
    console.log("nested properties update when the original changes using spread")
}
else{
    console.log("nested properties not updated when the original changes using spread")
}


if(obj1===copyobj2){
    console.log("nested properties update when the original changes using obj.assign")
}
else{
    console.log("nested properties not updated when the original changes using obj.assign")
}

}
modifiedObj({name:"sradha",age:22});

