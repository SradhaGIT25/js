let linkedlist=[];
let head=null;

function singlylinkedlist(fun,value){
    let obj={data:value,next:null}

    if(fun==="insertAtEnd"){
        linkedlist.push(obj);
        for(let i=0;i<linkedlist.length;i++){
            linkedlist[i].next=i+1;
        }
        linkedlist[linkedlist.length-1].next=null;
        head=linkedlist.indexOf(linkedlist[0]);
    }

    else if(fun==="deleteAtEnd"){
        linkedlist.pop();
        linkedlist[linkedlist.length-1].next=null;
    }

    else if(fun==="insertAtFront"){
        linkedlist.unshift(obj);
        for(let i=0;i<linkedlist.length;i++){
            linkedlist[i].next=i+1;
        }
        linkedlist[linkedlist.length-1].next=null;
        head=linkedlist[0].next;  
    }

    else if(fun==="deleteAtFront"){
        linkedlist.shift();
        for(let i=0;i<linkedlist.length;i++){
            linkedlist[i].next=i+1;
        }
        linkedlist[linkedlist.length-1].next=null;
        head=linkedlist[0].next;  
    }

    return (linkedlist);
}
console.log(singlylinkedlist("insertAtEnd",4))
console.log(singlylinkedlist("insertAtEnd",5))
console.log(singlylinkedlist("insertAtEnd",6))
console.log(singlylinkedlist("insertAtEnd",7))
console.log(singlylinkedlist("deleteAtEnd"))
console.log(singlylinkedlist("insertAtFront",2))
console.log(singlylinkedlist("deleteAtFront"))
// console.log(singlylinkedlist("insertAtSpecificPosititon",9,))
// console.log(singlylinkedlist("deleteAtSpecificPosititon",5))