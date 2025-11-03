// [ ] Write a function  getValue(a)  that returns  'No Value'  if  a  is  undefined ,  'Empty'
// if  a  is  null , else returns the value.

function getValue(a){
    if(a===undefined){
        return 'No Value';
    }
    else if(a===null){
        return 'Empty';
    }
    else{
       return a;
    } 
}
// let a;
console.log(getValue(5));
console.log(getValue());
console.log(getValue(null));