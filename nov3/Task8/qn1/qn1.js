const box=document.getElementById("box")





box.addEventListener("mouseover",()=>{
let min=0;
let max=255;
let randomNum1=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum1)
let randomNum2=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum2)
let randomNum3=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum3)
   box.style.backgroundColor=`rgb(${randomNum1},${randomNum2},${randomNum3})`;
})
box.addEventListener("mouseout",()=>{
   box.style.borderColor="steelblue";
})


