const container=document.getElementById("container");
const mark=document.getElementById("mark");

container.addEventListener("scroll",()=>{
    console.log(container.scrollTop);
    let measurement=((container.scrollTop)/(container.scrollHeight-container.clientHeight))*100
    console.log(measurement);
    mark.style.height=`${measurement}%`
})
