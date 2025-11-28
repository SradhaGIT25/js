let linkedlist=[];
let head=null;

function circularlinkedlist(fun,value){
    let obj={data:value,next:null}

    if(fun==="insertAtEnd"){
        linkedlist.push(obj);
        for(let i=0;i<linkedlist.length;i++){
            linkedlist[i].next=i+1;
        }
        linkedlist[linkedlist.length-1].next=linkedlist.indexOf(linkedlist[0]);
        head=linkedlist.indexOf(linkedlist[0]);
    }

    else if(fun==="deleteAtEnd"){
        linkedlist.pop();
        linkedlist[linkedlist.length-1].next=linkedlist.indexOf(linkedlist[0]);
    }

    return (linkedlist);
}
console.log(circularlinkedlist("insertAtEnd",4))
console.log(circularlinkedlist("insertAtEnd",6))
console.log(circularlinkedlist("insertAtEnd",7))
console.log(circularlinkedlist("deleteAtEnd"))
