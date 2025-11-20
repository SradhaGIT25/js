const chars=document.getElementById("chars");
const countvalue=document.getElementById("countvalue");
const limit=document.getElementById("limit");
console.log(limit.textContent);
let dupval=limit.textContent.split(":");
let val=Number(dupval[dupval.length-1]);
console.log(val)

chars.addEventListener("input",()=>{
    countvalue.style.display="block"
countvalue.textContent=`${chars.value.length}`;
if(chars.value.length>val){
    countvalue.style.color="red";
    countvalue.style.borderColor="red";
}
})
