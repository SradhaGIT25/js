const container=document.querySelector(".container");
const sctop=document.querySelector(".sctop");


container.addEventListener("scroll",()=>{
    if(container.scrollTop>0){
        sctop.classList.remove("hide");
    }
    else{
        sctop.classList.add("hide");
    }
console.log(container.scrollTop);
})

sctop.addEventListener("click",()=>{
    // container.scrollTop=100;
    container.scrollTo({
        top:0,
        behavior:"smooth",
        // behavior:"instant",
        // behavior:"auto",
    })
    // scroll-behavior= "smooth";

})
