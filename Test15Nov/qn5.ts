
type obj={
    name:string,
    price:number,
}
    export default function filterProducts(products:obj[],searchText:string):obj[] | boolean {

        if(!Array.isArray(products)|| products.length===0||products=== null|| products === undefined){
            return false;
        }
        else{
            for(let i=0;i<products.length;i++){
                if(typeof products[i] !== "object" || Array.isArray(products[i]) || products[i]=== null || products[i]=== undefined){
                    return false;
                }
            }
            let name:string;
    let array:obj[]=[];
    for(let i=0;i<products.length;i++){
        name=(products[i].name).toLowerCase();
        if(name.includes(searchText.toLowerCase())){
            array.push(products[i]);
        }
}
return array;
}
        }
    
