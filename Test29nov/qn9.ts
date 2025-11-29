function difference(a:object,b:object)object | boolean{
    let obj:object={}
    let sobj1:object={}
    let sobj2:object={}
    let a1:(string|number)[]=[]
    let a2:(string|number)[]=[]
for(let key1 in a){
    for(let key2 in b){
        if(key1===key2){
            if(a[key1]!==b[key2]){
                a1.push(a[key1]);
                a1.push(b[key2]);
                sobj1[key1]=a1;
                obj.changed=sobj1;
                console.log(obj)
            }
        }
    //    let arr=Object.entries(a)
    //    else if(!arr.includes(key2)){
    //     sobj2[key2]=b[key2];
    //     console.log(sobj2)
    //    }
    //     else if(key1!==key2){
    //         a2.push(key1)
    //         obj.removed=a2;
    //         console.log(obj)
    //     }
    }
}
}
console.log(difference({ x:1, y:2, z:3 },{ x:1, y:4, w:5 }))