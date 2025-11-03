const submit=document.getElementById("submit");
const dog=document.getElementById("dog");
const imageClass=document.getElementById("imageClass");
const uploader=document.querySelector(".uploader");

submit.addEventListener('click',function(){
    console.log(dog.files[0].name);
 
    let imagePath=dog.files[0];
    let imageItem=`<img src=${URL.createObjectURL(imagePath)} class="displayedImage">`
    imageClass.insertAdjacentHTML("beforeend",imageItem);
    
    const displayedImage=document.querySelectorAll('.displayedImage');
    displayedImage.forEach((image)=>{
    image.addEventListener("dblclick",function(){
    image.style.display="none";

    });
})

})
setInterval(function(){
if(document.querySelector('.displayedImage')){
    uploader.style.display="none";
}
else{
    uploader.style.display="block";
}
},1000);

 
