

export default function replacing(string:string):string | boolean{
    if(typeof string !== "string" || string.length===0 || string===null || string===undefined){
        return false;
    }
    else{
        let str:string="";
    let pattern:RegExp=/[0-9]/
for(let i=0;i<string.length;i++){
    if(!pattern.test(string[i])){
        str+=string[i];
    }
    else{
        str+="#";
    }
}
return str;
}
    }
    
// console.log(replacing("Room 45 on floor 3"));
// console.log(replacing("576876876876"));
// console.log(replacing("sdkqjed 124371jhsdkhsdkjn2373uiehl326ryu3"));