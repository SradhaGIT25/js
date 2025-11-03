const heart=document.getElementById("heart")

// heart.addEventListener("click",()=>{
//     if(heart.style.fill="none"){
//          heart.style.fill="red";
//     }
//     else{
//         heart.style.fill="none"
//     }
//     })

heart.addEventListener("click",()=>{
heart.classList.toggle("coloringHeart");
})