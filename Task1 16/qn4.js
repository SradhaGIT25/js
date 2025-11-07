function combinations(n,k){
    let array=[]
    let newArray=[]
    let main=[]
    for(let i=1;i<=n;i++){
        array.push(i);
    }
    console.log(array);

    for(let i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(i!==j){
                newArray.push(array[i]);
                newArray.push(array[j]);
                 main.push(newArray)
                // console.log(main)
                // console.log(newArray);
        }
            }

            main.push(newArray)
           
        }
        
    // }
    
    return main;
}
console.log(combinations(4,2))
