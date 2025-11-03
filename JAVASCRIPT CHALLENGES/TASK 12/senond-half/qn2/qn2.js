const listItems=document.querySelector(".listItems");
const show=document.getElementById("show");


listItems.addEventListener("mouseover",(li)=>{
show.textContent=li.target.textContent;
})

listItems.addEventListener("mouseout",(li)=>{
show.textContent="";
})