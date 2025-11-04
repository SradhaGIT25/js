function subArrays(array,size){
    let newArray=[]
    let midArray=[]
    let mainArray=[]
    let len=array.length
    for(let i=0;i<=len;i++){
        midArray=array.splice(0,size)
        if(midArray.length!==0){
            newArray.push(midArray);
        }
    }
            return newArray;
    }
console.log(subArrays([1,2,3,4,5],1
))
// console.log(subArrays([1,9,6,3,2],3))