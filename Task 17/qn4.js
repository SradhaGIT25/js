
function Once(fn){
    let initial=0;
    function called(){
        initial=initial+1;
        console.log(initial)
    }
        return fn;
}
const initialize=Once(()=>console.log("initialized"));
initialize();
