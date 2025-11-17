
    function DeepEqual(a,b){
    if(typeof a!=="object" || typeof b!=="object"){
        return false;
    }
    else{
        if(Array.isArray(a)  && Array.isArray(b)){
            if(a.length!==b.length){
                return false;
            }
        for(let i=0;i<a.length;i++){
                if(!DeepEqual(a[i],b[i])){
                        return false;
                }
            }
            return true;
        }
    
    
        if(Object.keys(a).length!==Object.keys(b).length){
            return false;
        }
            for(let key in a){
                if(!DeepEqual(a[key],b[key])){
                return false;
            }
        }
                return true;
        }
    }

console.log(DeepEqual({x:1,y:{z:2}},{x:1,y:{z:2}}))
console.log(DeepEqual([1,2,3],[1,2,3]))

        
