type objec={
    name:string,
    count:number,
}
export default function replacingstr(str:string,obj:objec):string | boolean{
    if(typeof str!== "string" || str.length===0 || str===null || str === undefined || typeof obj!=="object" || Array.isArray(obj)) {
        return false;
    }
    else{
        let s:string=""
let pattern:string="{}"
let index:number;
    for(let i=0;i<str.length;i++){
        if(!pattern.includes(str[i])){
            s+=str[i];
            
        }
        else{
            s+="";
        }
    }

let words:string[]=s.split(" ");
for(let i=0;i<words.length;i++){
    if(words[i].includes(",")){
        console.log(words[i]);
        index=i;
        words[i]=words[i].replace(",","")
    }
}

    for(let i=0;i<=words.length;i++){
        for(let key in obj){
        if(words[i]===key){
            console.log(key)
            words[i]=obj[key]
            console.log(words[i] , obj[key])
        }
    }
}

let res:string=""
let stri:string=words.toString().replaceAll(","," ");
let splitstr:string[]=stri.split(" ")
for(let i=0;i<splitstr.length;i++){
    if(i!=index){
        res+=splitstr[i]+" ";
    }
    else{
        res+=splitstr[i]+","+" "
    }
}
return (res)

    }

}

console.log(replacingstr("Hello {{name}}, you have {{count}} new messages.",{ name: "John", count: 3 }))