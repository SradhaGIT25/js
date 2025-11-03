function successLoad(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("SUCCESS!!")
    },2000)
})
}
successLoad().then(value=>{console.log(value)}).catch((error)=>{console.log(error)}).finally(()=>{console.log("Promise Completed")});