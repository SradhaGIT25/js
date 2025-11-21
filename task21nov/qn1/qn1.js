const container=document.querySelector(".container");
const slides=document.querySelector(".slides");
const image=document.querySelectorAll(".image");
const prvbtn=document.getElementById("prvbtn");
const nxtbtn=document.getElementById("nxtbtn");

 let v=100;
let len=image.length-1;

function autoslider(){
   v+=100;
slides.style.transform=`translate(-${v}%)`;
if(v===len*100){
    v=-100;
}

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

 let index=0;

 for(i=0;i<image.length-1;i++){
    let index=i;
    prvbtn.addEventListener("click",()=>{
        index--;
        if(index<0){
            index=image.length-1;
        }
                    for(let j=0;j<image.length;j++){
            image[j].classList.add("hide");
        }
        image[index].classList.remove("hide");
        k=index;
        
    })
 }


 for(i=0;i<image.length-1;i++){
    let index=i;
    nxtbtn.addEventListener("click",()=>{
        index++;
         if(index>=image.length){
            index=0;
        }
        for(let j=0;j<image.length;j++){
            image[j].classList.add("hide");
        }
        image[index].classList.remove("hide");
        k=index
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



// let index=0;

// function showslides(){
// slides.forEach(s=>s.classList.add("hide"))
//   slides[index].classList.remove("hide");
// }

// function autoslider(){
//         index=(index+1)%slides.length;
//         showslides();
// }