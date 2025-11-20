const add=document.getElementById("add");
const mark=document.getElementById("mark");
const scrollContainer=document.getElementById("scroll-Container");


let p=0;
async function fetchData(){
    p++;
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}&_limit=10`);
    const data=await response.json();
    console.log(data);

    for(let i=0;i<data.length;i++){
       const element=`<div class="one"><p>UserId : ${data[i].userId}</p><p>Id : ${data[i].id}</p><p>Title : ${data[i].title}</p><p>Body : ${data[i].body}</p></div>`
       add.insertAdjacentHTML("beforeend",element);
    }
}
fetchData()
document.addEventListener("scrollend",()=>{
mark.style.width=`100%`
fetchData()
})


// window.addEventListener("scroll",(e)=>{

// })