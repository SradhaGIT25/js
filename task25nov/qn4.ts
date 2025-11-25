


export default function snaketocamelcase(string:string):string | boolean{
    if(typeof string !== "string" || string.length === 0 || string === null || string === undefined){
        return false;
    }
    else{
        let pattern1=/[A-Z]/
        let specialchars="~`!@#$%^&*()_+={}[]|\:;<>,./?";
        let pattern2=/[0-9]/
        for(let i=0;i<string.length;i++){
            if(pattern1.test(string[i])){
                return false;
            }
            if(!string.includes("-")){
                return false;
            }
            if(pattern2.test(string[0])){
                return false;
            }
        }
        for(let i=0;i<specialchars.length;i++){
            if(string.includes(specialchars[i])){
                return false;
            }
        }

        let str:string=string.replaceAll("_"," ");
let arr:string[]=str.split(" ")
let w1:string=arr[0];
let result:string=w1

for(let i=1;i<arr.length;i++){
    let s1=arr[i].toString();
    let first=s1[0];
    let upletter=first.toUpperCase();
    let rem=s1.slice(1)
    let newword=upletter+rem;
    console.log(newword);
    result+=newword;
}
return result;

    }
}
// console.log(snaketocamelcase("hello_world_from_js"))