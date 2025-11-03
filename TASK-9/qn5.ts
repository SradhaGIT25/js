function takeProduct(product:object){
    console.log(`Product [${p1.id}] : ${p1.name} costs ${p1.price}`)
}

type product={
    id:number
    name:string,
    price:number,
    inStock:boolean,

}

const p1={
    id:23,
    name:"t-shirt",
    price:700,
    inStock:true,

}
takeProduct(p1);