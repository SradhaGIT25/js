function checkNumber(){
    return new Promise((resolve,reject)=>{
        resolve(5)
    })
}
checkNumber().then(value=>{return value*2})
.then(result=>{return result+10})
.then(result=>console.log(result));
