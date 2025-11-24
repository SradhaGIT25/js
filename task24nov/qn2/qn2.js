const ulu=document.getElementById("ulu");
const container=document.querySelector(".container");
const dogs=document.querySelector(".dogs");
const cats=document.querySelector(".cats");
const birds=document.querySelector(".birds");
 let s=100;

list1.addEventListener("click",()=>{
    list1.style.color="violet";
    list1.style.textdecoration="underlined";
    
    setTimeout(()=>{
    dogs.style.width="100%";
    // modalc.style.width="500px";
    },500)
    dogs.classList.remove("hide");
    cats.classList.add("hide");
    birds.classList.add("hide");
    // dogs.style.width=`100%`;
    // list1.style.color="black";
})


list2.addEventListener("click",()=>{
    list2.style.color="violet";
    list2.style.textdecoration="underlined";
    setTimeout(()=>{
    cats.style.width="100%";
    // modalc.style.width="500px";
    },500)
    // v+=100;
    // container.style.transform=`translate(-${v}%)`;
    cats.classList.remove("hide");
    dogs.classList.add("hide");
    birds.classList.add("hide");
    // cats.style.width=`100%`;
})

list3.addEventListener("click",()=>{
    list3.style.color="violet";
    list3.style.textdecoration="underlined";
    setTimeout(()=>{
    birds.style.width="100%";
    // modalc.style.width="500px";
    },500)
    birds.classList.remove("hide");
    dogs.classList.add("hide");
    cats.classList.add("hide");
    // v+=100;
    // container.style.transform=`translate(-${v}%)`;
    // birds.style.width=`100%`;
})



