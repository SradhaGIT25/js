const container=document.getElementById("container");
const mark=document.getElementById("mark");

container.addEventListener("scroll",()=>{
    console.log(container.scrollTop);
    let units=((container.scrollTop)/((container.scrollHeight)-(container.clientHeight)))*100;
    mark.style.height=`${units}%`
})