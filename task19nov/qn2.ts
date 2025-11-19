export default function convertToObj(string:string):object{
    if(typeof string !== "string" || string.length===0 || string === null || string === undefined){
        return false;
    }
    else{
        let sepSplit:string[]=string.split("&");
for(let i=0;i<sepSplit.length;i++){
    sepSplit[i]=sepSplit[i].split("=")
}
let obj:object={}

for(let i=0;i<sepSplit.length;i++){
    let ele:string=sepSplit[i];
    for(let j=0;j<ele.length-1;j++){
        obj[ele[j]]=ele[j+1];
    }
}
return (obj)
}
    }

