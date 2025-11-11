










    function DeepEqual(a,b){
    if(typeof a!=="object" || typeof b!=="object"){
        return false;
    }
    else{
        if(Object.entries(a).length===Object.entries(b)){
            for(key in a){
                if(a[key] === b[key]){
                return true;
            }
            else{
                return false;
            }
        }


        for(let i=0;i<a.length;i++){
                if(a[i]===b[i]){
                        return false;
                }
                else if(Array.isArray(a[i]) || Array.isArray(b[i])){
                    for(let j=0;j<a[i].length;j++){
                        if(a[i][j]!==b[i][j]){
                            return false;
                        }
                    }
                          return  true;
                    }
                }
            }
            else{
                return false;
            }

                
            }


        }
