function justified(array,width){
    let newArray=[]
    let newString="";
    let a=[...array];
    console.log(a);
    let str=array.toString();
    console.log(str);
    str=str.replaceAll(",","");
    console.log(str)
    let len=str.length;
    console.log(len)
    let splits=Math.ceil(len/width);
    console.log(splits);

for(let i=0;i<array.length;i++){
    if(array[i].length<=width){
        newString=newString+array[i]+" ";
    }
}
console.log(newString);
 
for(let i=0;i<newString.length;i++){
    let subs=newString.slice(0,splits);
    if(subs.length!=0){
        newArray.push(array);
    }
}
// return newArray;
console.log(newArray);

let space=(width*splits)-str.length;
console.log(space);

}
console.log(justified(["This", "is", "an", "example", "of", "text", "justification."],16));
// console.log(justified(["What","must","be","acknowledgment","shall","be"]),16);



