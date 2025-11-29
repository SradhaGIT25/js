export default function convertbytestokb(bytes:number):string | boolean{
    if(typeof bytes!=="number" || bytes<0 || bytes === null || bytes === undefined){
        return false;
    }
    else{
        let kb:string=(bytes/1024).toFixed(2) +" " +"KB";
   return (kb);
    }
}
console.log(convertbytestokb(1500));
console.log(convertbytestokb(1024));