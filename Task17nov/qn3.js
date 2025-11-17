function TimeoutWrapper(promise,ms){
    // async fn(promise,ms){
        return new Promise((resolve,reject)=>{
            let t=setTimeout(()=>
                reject("Timeout"),ms);
                promise.then(res=>{
                    clearTimeout(t);
                resolve(res);
                })
                .catch(err=>{
                    clearTimeout(t);
                    reject(err);
                });

            });
                
            }
// }
const p=new Promise(res=>setTimeout(()=>res("complete"),3000));
withTimeout(p,2000).catch(console.log);