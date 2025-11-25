

export default function countvowel(string:string):number | boolean{
    if(typeof string !=="string" || string.length===0 || string===null || string===undefined){
        return false;
    }
    else{
        let count:number=0;
    let vowels:string="aeiouAEIOU";
    for(let i=0;i<string.length;i++){
        if(vowels.includes(string[i])){
        count++;
    }
    }
    return count;
}
    }
    
// console.log(countvowel("umbrella"));
// console.log(countvowel("wire"));
// console.log(countvowel("knee cap"));