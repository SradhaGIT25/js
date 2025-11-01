function callApi(){
    fetch('https://randomuser.me/api/?results=5')
.then(res=>{
    return res.json();
})
.then(data=>{
    // console.log(data.results);
    const mapped=data.results.map((obj)=>{
        let obj1={};
        obj1.picture=obj.picture;
        obj1.name=obj.name;
        obj1.email=obj.email;
        return obj1;
    })
    console.log(mapped);
})

.catch(error=>console.log(error));
}
callApi();

const shuffle=document.getElementById("shuffle");

shuffle.addEventListener('click',(event)=>{
callApi();
})


