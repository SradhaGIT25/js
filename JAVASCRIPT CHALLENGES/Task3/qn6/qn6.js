const myQueue={
    
queue:[],
enQueue:function(number){
    this.queue.push(number),
    console.log(this.queue);
},

deQueue:function(number){
    this.queue.shift(number)
    console.log(this.queue);
    return this.queue;
},

peek:function(number){
    return this.queue[0];
},

isEmpty:function(number){
    for(let i=0;i<=this.queue.length-1;i++){
         if(this.queue.length===0){
            return true;
    }
    else{
        return false;
    }
    }
   
},
}

myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.deQueue();
myQueue.peek();
console.log(myQueue.isEmpty());
