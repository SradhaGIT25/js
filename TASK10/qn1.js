function dataLoads(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data loaded!")
    },2000)
})
}
dataLoads().then(value=>{console.log(value)});