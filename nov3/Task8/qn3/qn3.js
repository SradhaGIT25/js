box.addEventListener("dblclick",()=>{
let min=0;
let max=255;
let randomNum1=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum1)
let randomNum2=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum2)
let randomNum3=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum3)
   box.style.borderColor=`rgb(${randomNum1},${randomNum2},${randomNum3})`;
})
