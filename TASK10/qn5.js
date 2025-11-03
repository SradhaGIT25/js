
    const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data loaded!")
    },2000)
})

    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Network updated")
        },1000)
    })

    const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("LOGIN SUCCESS!!")
    },2000)
})

Promise.all([p1,p2,p3]).then((values)=>{console.log(values)});
