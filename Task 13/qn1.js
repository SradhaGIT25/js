let increment=0;
function counting(increment){
function createCounter(){
        increment=increment+1;
        console.log(increment);
    }
    return createCounter;
}
increment=counting(increment)
increment();
increment();
increment();
