export default function frequencySort(arr:number[]){

    
    function freq(arr:number[]){
        let count:number=0;
        let frequency={};
        let indexes:number[]=[];
        for(let i=0;i<arr.length;i++){
            let count=0;
            for(let j=0;j<arr.length;j++){
                
                if(arr[i]===arr[j]){
                
                        count++;
                    }
                    else{
                        continue;
                    }
             frequency[arr[i]]=count;
        }
    }
       console.log(frequency);
    
    //    for(let i=0;i<arr.length;i++){
    // //    for(let char of frequency){
    //     if(frequency[arr[i]]>frequency[arr[i+1]]){
    //         let temp=arr[i];
    //         arr[i]>arr[i+1];
    //         arr[i+1]=temp;
    //     // }
    //    }}
    //    return arr;
    

    // for(let char in frequency)
    // a
}
console.log(freq([4,5,6,5,4,3]));



// function freq(arr,target){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             count++;
//         }
//     }
//     //  count=count;
//     return count;
// }
// // console.log((freq([4,5,6,5,4,3],4)));
// // ));
for(let i=0;i<arr.length;i++){
if(freq(arr[i])>freq(arr[i+1])){
    let temp:number=arr[i];
    arr[i]>arr[i+1];
    arr[i+1]=temp;
}
}
// return arr;
}
console.log(frequencySort([4,5,6,5,4,3]))
