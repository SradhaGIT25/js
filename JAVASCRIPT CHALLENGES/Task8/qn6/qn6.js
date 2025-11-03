const width=document.getElementById("width");
const height=document.getElementById("height");
const resizeClass=document.getElementById("resizeClass")

window.addEventListener("resize", () => { 
    width.textContent=window.innerWidth;
    console.log(`Window Width : ${window.textContent}`)
    height.textContent=window.innerHeight;
    console.log(`Window Height : ${height.textContent}`)
})
