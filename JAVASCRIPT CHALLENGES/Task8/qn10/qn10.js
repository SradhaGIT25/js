const list=document.querySelector(".list")

window.addEventListener("keydown", event=>{
    console.log(`Key down = ${event.key}`);   
    if(event.key==='A'){
        list.classList.remove("tohide");
    }
})