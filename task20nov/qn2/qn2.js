const container=document.querySelector(".container");
const image=document.querySelectorAll(".image");
const prvbtn=document.getElementById("prvbtn");
const nxtbtn=document.getElementById("nxtbtn");
let k=0;


function autoslider(){
    for(let i=0;i<image.length-1;i++){
        image[i].classList.add("hide");
    }
    image[k].classList.remove("hide");
        k++;
}
let t=setInterval(()=>{
    autoslider();
 },3000);


container.addEventListener("mouseover",()=>{
    console.log("hi")
clearInterval(t);
 });

container.addEventListener("mouseout",()=>{
    t=setInterval(()=>{
    autoslider();
 },3000);

 });

 for(i=0;i<image.length;i++){
    let index=i;
    prvbtn.addEventListener("click",()=>{
        if(index===0){
            i=image.length-1;
        }
        else{
            index--;
        }
        for(let j=0;j<image.length;j++){
            image[j].classList.add("hide");
        }
        image[index].classList.remove("hide");

        
    })
 }


 for(i=0;i<image.length;i++){
    let index=i;
    nxtbtn.addEventListener("click",()=>{
         if(index===image.length-1){
            i=0;
        }
        else{
            index++;
        }
        for(let j=0;j<image.length;j++){
            image[j].classList.add("hide");
        }
        image[index].classList.remove("hide");
    })
}

// nxtbtn.addEventListener("click",()=>{
//     for(let i=image.length-1;i>=0;i--){
//         if(image[i]){
//             for(let i=0;i<image.length;i++){
//             image[i].classList.add("hide");
//         }
//             image[i-1].classList.remove("hide");
//         }
//         if(i===0){
//             i=image.length-1;
//         }
//     }
// }
// )
