const main=document.querySelector(".main");
const modalc=document.querySelector(".modalc");
const image1=document.querySelector(".image1");
const clickme=document.getElementById("clickme");
const closed=document.getElementById("closed");


clickme.addEventListener("click",()=>{
    modalc.classList.remove("hide");

    // setTimeout(()=>{
    // 
    // })
    
    setTimeout(()=>{
    modalc.style.height="500px";
    modalc.style.width="500px";
    },0)
    // image1.style.transition="2s";
    // modalc.style.height="500px";
    // modalc.style.width="500px";
    // modalc.style.transition="2s";
})

closed.addEventListener("click",()=>{
    modalc.classList.add("hide");
})

addEventListener("keydown",(event)=>{
if(event.key==="Escape"){
    modalc.classList.add("hide");
}
})

main.addEventListener("click",(event)=>{
    if(event.target === main){
        modalc.classList.add("hide");
    }
})
