const inputText=document.getElementById("inputText");
const submit=document.getElementById("submit");
const addKey=document.getElementById("addKey");
const newTable=document.getElementById("newTable")

inputText.addEventListener("keydown", event=>{
    inputText.value="";   

    const rowt=document.querySelectorAll(".rowt");

    if(rowt.length>9){
        let sra=document.querySelector(".rowt");
        sra.remove();  
    }
    let fgf=`<tr class="rowt">
    <td>${event.key}</td>
    <td>${event.code}</td>
    </tr>`

    newTable.insertAdjacentHTML("beforeend",fgf);
  
})

