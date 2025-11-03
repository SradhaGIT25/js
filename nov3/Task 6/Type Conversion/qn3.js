function toBoolean(input){
    if(input==='yes' || input==='true' || input==='1'){
        return true;
    }
    else{
        return false;
    }
}
console.log(toBoolean('1'))
console.log(toBoolean('true'))
console.log(toBoolean('yes'))
console.log(toBoolean('tufg'))
console.log(toBoolean('false'))
console.log(toBoolean(78))