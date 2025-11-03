const someText=document.getElementById("someText")
const submitbtn=document.getElementById("submitbtn")
const togglebtn=document.getElementById("togglebtn")
const store=document.getElementById("store")



submitbtn.addEventListener("click",()=>{
    let paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-content');
    paragraph.innerText=someText.value
    store.appendChild(paragraph);
    someText.value="";
})

togglebtn.addEventListener("click",()=>{
    store.classList.toggle('paragraph-hideshow');
})