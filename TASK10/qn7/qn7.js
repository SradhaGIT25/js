const addContent=document.getElementById("addContent");

async function fetchData(){
    const response1=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data1=await response1.json();
    console.log(data1);

    const response2=await fetch('https://jsonplaceholder.typicode.com/users');
    const data2=await response2.json();
    console.log(data2);

    let obj1={}

    for(let i=0;i<data1.length;i++){
        for(let j=0;j<data2.length;j++){
            if(data1[i].userId===data2[j].id){ 
                obj1.name=data2[j].name;
                obj1.email=data2[j].email;
                 obj1.title=data1[j].title;
                obj1.body=data1[j].body;
                console.log(obj1)
                const element=`<div class="one"><p>Name : ${obj1.name}</p><p>Email : ${obj1.email}</p><p>Title : ${obj1.title}</p><p>Body : ${obj1.body}</p></div>`
                addContent.insertAdjacentHTML("beforeend",element);
                
                }
        }
    }
}
fetchData()
















// let result1;
// let result2;
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=> response.json())
// .then(data1=>console.log(data1))

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=> response.json())
// .then(data2=>result2=-data2)

// let obj1={}



// let res1len=Object.keys(result1).length;
// objectLength = Object.keys(result1).length;
//     console.log(objectLength);

// for(let i=0;i<result1.length;i++){
    // for(let j=0;j<data2.length;j++){
        // if(result1[i].id === result2[i].id){
        //     console.log(result1[i].id)
            // obj1.title=data1.title;
            // obj1.body=data1.body;
            // obj1.name=data2.name;
            // obj1.email=data2.email;
        // }
    // }
// }

// result1.forEach((d1)=>{
// result2.forEach((d2){
//     if(d1.id===d2.id){
//         console.log(d1.id)
//     }
// })
// })


