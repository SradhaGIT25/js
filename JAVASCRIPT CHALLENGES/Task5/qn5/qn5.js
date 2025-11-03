const inputField= document.getElementById("inputField");
const prefix=document.getElementById("prefix");


inputField.addEventListener('input',(event)=>{
setTimeout(()=>{
// prefix.style.display="block";
prefix.innerHTML=`HELLO ${inputField.value}`
},2000)
})
