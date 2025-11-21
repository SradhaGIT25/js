const navi=document.getElementById("navi");
const listItems=document.getElementById("listItems");
const list1=document.querySelector(".list1");
const list2=document.querySelector(".list2");
const list3=document.querySelector(".list3");
const list4=document.querySelector(".list4");
const list5=document.querySelector(".list5");
const sublist1=document.querySelector(".sublist1");
const sublist2=document.querySelector(".sublist2");
const sublist3=document.querySelector(".sublist3");
const sublist4=document.querySelector(".sublist4");
const sublist5=document.querySelector(".sublist5");

        list1.addEventListener("mouseover",()=>{
        list1.style.color="blue";
            sublist1.classList.remove("hide");
        })

        list1.addEventListener("mouseout",()=>{
        list1.style.color="black";
            sublist1.classList.add("hide");
        })


        list2.addEventListener("mouseover",()=>{
        list2.style.color="blue";
            sublist2.classList.remove("hide");
        })

        list2.addEventListener("mouseout",()=>{
        list2.style.color="black";
            sublist2.classList.add("hide");
        })


        list1.addEventListener("mouseover",()=>{
        list1.style.color="blue";
            sublist1.classList.remove("hide");
        })

        list3.addEventListener("mouseout",()=>{
        list1.style.color="black";
            sublist1.classList.add("hide");
        })


        list3.addEventListener("mouseover",()=>{
        list1.style.color="blue";
            sublist3.classList.remove("hide");
        })

        list3.addEventListener("mouseout",()=>{
        list1.style.color="black";
            sublist3.classList.add("hide");
        })


        list4.addEventListener("mouseover",()=>{
        list4.style.color="blue";
            sublist4.classList.remove("hide");
        })

        list4.addEventListener("mouseout",()=>{
        list4.style.color="black";
            sublist4.classList.add("hide");
        })


        list5.addEventListener("mouseover",()=>{
        list5.style.color="blue";
            sublist5.classList.remove("hide");
        })

        list5.addEventListener("mouseout",()=>{
        list5.style.color="black";
            sublist5.classList.add("hide");
        })
//  sublist.classList.add("hide");
// console.log(sublist)

    // list.forEach((l)=>{
    //     l.addEventListener("mouseover",()=>{
    //     l.style.color="blue";
    //         sublist.classList.remove("hide");
    //     })
    // })

    // list.forEach((l)=>{
    //     l.addEventListener("mouseout",()=>{
    //     l.style.color="black";
    //     sublist.classList.add("hide");
    // })
    // })