function isValid(number){
    if(number===undefined || number===NaN || number===Infinity){
        return false;
    }
    else{
        return true;
    }
}
console.log(isValid());