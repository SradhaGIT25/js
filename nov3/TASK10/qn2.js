function networkCheck(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Network error")
        },1000)
    })
}

networkCheck().then((value)=>{console.log(value)}).catch((error)=>{console.error(error)});