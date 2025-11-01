const countLabel=document.getElementById("countLabel");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");

let count=0;
reset.onclick=function(){
        count=0;
        countLabel.textContent=count;
        if(countLabel.textContent==0){
        countLabel.style.color="grey";
        }
}
increase.onclick = function(){
        if(countLabel.textContent<10){
        count++;
        countLabel.textContent=count;
        }
        if(countLabel.textContent>0){
        countLabel.style.color="green";
        }
        if(countLabel.textContent==0){
        countLabel.style.color="grey";
        }
}
decrease.onclick=function(){
         if(countLabel.textContent>-10){
        count--;
        countLabel.textContent=count;
        }
        if(countLabel.textContent<0){
        countLabel.style.color="red";
        }
         if(countLabel.textContent==0){
        countLabel.style.color="grey";
        }
}