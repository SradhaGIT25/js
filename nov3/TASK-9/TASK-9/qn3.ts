function convertToUpper(array:string[]):void{
    const upper : string[] = [];
    for(let i=0;i<array.length;i++){
        upper.push(array[i].toUpperCase())
    }
    console.log(upper)
}
convertToUpper(["sradha","shilpa","sreelatha"])