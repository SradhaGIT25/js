let doubly=[];
let head=null;
function doublyLL(fun,value){
let obj={previous:null,data:value,next:null}

 if(fun==="insertAtEnd"){
        doubly.push(obj);
        for(let i=0;i<doubly.length;i++){
            doubly[i].next=i+1;
        }
        for(let i=0;i<doubly.length;i++){
            doubly[i].previous=i;
        }
        doubly[doubly.length-1].next=null;
        head=doubly.indexOf(doubly[0]);
    }

    else if(fun==="deleteAtEnd"){
        doubly.pop();
        doubly[doubly.length-1].next=null;
    }


    return (doubly);

}
console.log(doublyLL("insertAtEnd",4));
console.log(doublyLL("insertAtEnd",5));
console.log(doublyLL("insertAtEnd",6));
console.log(doublyLL("deleteAtEnd"));