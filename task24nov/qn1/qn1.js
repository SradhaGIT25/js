// const dummy=document.getElementById("dummy");
// const add=document.getElementById("add");
// const noti=document.querySelectorAll(".noti");
// const closedbtn=document.querySelector(".closedbtn");
// let k=1;
// let count=0;
// dummy.addEventListener("click",()=>{
//     const not1=`<div class="noti"><p>New Notification</p><button class="closedbtn${k}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="18"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg></button></div>`;
//     add.insertAdjacentHTML("beforeend",not1);
//     k++;
//     count++;
// })
// close.forEach((c)=>{
// c.addEventListener("click",()=>{
//     for(let k=1;k<=count;k++){
//         noti[k].classList.add("hide");
//     }

//     // noti1.forEach((no)=>{
// //         noti.classList.add("hide");
// //     })
// })
// })

// for(let k=1;k<=count;k++){
// closedbtn[k].addEventListener("click",()=>{
// //     noti.forEach((n)=>{
//         noti[k].classList.add("hide");
//     })
// // })
// }


// ()=>{
    // for()
    // noti1.classList.add("hide");
// })
//     
// }


const dummy=document.getElementById("dummy");
const add=document.getElementById("add");
let k=1;

dummy.addEventListener("click",()=>{
    const mydiv=document.createElement("div");
    mydiv.classList.add("styleadd");
    mydiv.innerText=`New Notification${k++}`;
    const closed=document.createElement("button");
    closed.classList.add("closedbtn");
    closed.innerText="X";
    mydiv.appendChild(closed);
    add.appendChild(mydiv);

    setTimeout(()=>{
       add.style.width=`150px`;
    },1000)


closed.addEventListener("click",()=>{
    add.classList.add("hide");
})

setTimeout(()=>{
       mydiv.style.width=`0px`;
       styleadd.style.border="none";
    },3000)

const timer=setTimeout(()=>{
    mydiv.classList.add("hide");
},5000)

})


