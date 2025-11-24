const sidebar=document.querySelector(".sidebar");
const menu=document.querySelector(".menu");
const closedbtn=document.querySelector(".closedbtn");
const com=document.querySelectorAll(".com");
const slist1=document.getElementById("slist1")
const slist2=document.getElementById("slist2")
const slist3=document.getElementById("slist3")
const slist4=document.getElementById("slist4")
const slist5=document.getElementById("slist5")
const sublist1=document.querySelector(".sublist1")
const sublist2=document.querySelector(".sublist2")
const sublist3=document.querySelector(".sublist3")
const sublist4=document.querySelector(".sublist4")
const sublist5=document.querySelector(".sublist5")

menu.addEventListener("click",()=>{
    menu.classList.toggle("hide");
    closedbtn.classList.toggle("hide");
    sidebar.classList.toggle("hide");
    sidebar.style.width="250px";
})

closedbtn.addEventListener("click",()=>{
    closedbtn.classList.toggle("hide");
    menu.classList.toggle("hide");
    sidebar.classList.toggle("hide");
    sidebar.style.width="0";
})

slist1.addEventListener("click",()=>{
    sublist1.classList.toggle("hide");
//    sublist1.classList.toggle("addheight");
})

slist2.addEventListener("click",()=>{
    sublist2.classList.toggle("hide");
})

slist3.addEventListener("click",()=>{
    sublist3.classList.toggle("hide");
})

slist4.addEventListener("click",()=>{
    sublist4.classList.toggle("hide");
})

slist5.addEventListener("click",()=>{
    sublist5.classList.toggle("hide");
})



