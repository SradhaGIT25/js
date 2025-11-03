const list=document.querySelectorAll(".list")
const listItems=document.querySelector(".listItems")

window.addEventListener("keydown", event=>{
    console.log(`Key down = ${event.key}`);   
    if(event.key==='A'){
        list.forEach(element=>{
            element.classList.toggle("tohide");
        })
    }
})