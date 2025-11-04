function calculations(array,number){
    let argument;
    function all(){
        for(let i=array.length-1;i>=0;i--){
             argument=array[i];
             number=argument(number);
        }
        console.log(number);
    }
    return all;
}
let result=calculations([(x) => x + 1, (x)=> x * x, (x) => 2 * x], 4);
result();
