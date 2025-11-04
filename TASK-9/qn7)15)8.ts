type stringArray=string[];
function anagramCheck(words:stringArray){
    const dup:string[] = [];
 
        let newArray:string[]=[];
        let mainArray=[];
        let sarray=[]
        let group:string[]=[]

        let str1=""
        let str2=""

         for(let i=0;i<words.length;i++){
            const word=words[i];
        const sorted=word.split('').sort()
            sarray.push(sorted);
        
         }


for(let j=0;j<sarray.length;j++){
    let key=sarray[j].join("");
    for(let i=0;i<words.length;i++){
        const word=words[i];
        if(typeof word !== "string"){
            return false;
        } 
        if(!dup.includes(word)){
            if(key===word.split("").sort().join("")){
            
            newArray.push(word);
                dup.push(word);
        }
    }
     
            }
            newArray=[]
            mainArray.push(newArray);
        }
        group=new Set(mainArray);
        return group;
    
    }

 
