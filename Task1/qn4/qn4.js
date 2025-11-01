

const toDoContainer=document.getElementById("toDoContainer");
const inputField=document.getElementById("inputField");
const addToDoBtn=document.getElementById("addToDo");
const show=document.getElementById("show");


 let array=[];

    // retaining data in localstorage
    let dataloc=localStorage.getItem("list") || [];
    let dloc=JSON.stringify(dataloc);
    let trimmed1=dloc.replace('"',"").replace('"',"")
    let trimmed2=trimmed1.split(',')
    for(let i=0;i<trimmed2.length;i++){
        const ele=`<li class=listItem>${trimmed2[i]}</li>`
        toDoContainer.insertAdjacentHTML("beforeend",ele)
    }


addToDoBtn.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value
    
    array.push(inputField.value);
    // adding to local storage
     localStorage.setItem("list",array);
    toDoContainer.appendChild(paragraph)


    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        console.log(paragraph);
    });
});  
    show.addEventListener('click',function(){
        const paragraphs=toDoContainer.querySelectorAll('p');
        paragraphs.forEach(p=>{
            if(p.style.textDecoration==="line-through"){
                p.classList.toggle('hideshow');
            }
        });
        
    });