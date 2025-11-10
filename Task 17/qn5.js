async function ComposeAsync(...fns){
    let array=[...fns]
    let argument;
    let number;
    
    function all(){
        for(let i=array.length-1;i>=0;i--){
             argument=array[i];
             number=argument(number);
        }
        console.log(number);
    }
    return all;
}
let result=await ComposeAsync([(x)=> x + 1, (x) => 2 * x]);
result();