function MonitorLongRunningTasks(tasks, threshold, onSlowTask){
    let t=setTimeout(()=>
                reject("Timeout"),threshold);
    promise.then(res=>{
                    clearTimeout(t);
                resolve(res);
                })
}