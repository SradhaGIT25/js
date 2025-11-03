// [ ] Try reassigning a  const  variable and catch the error using  try...catch . Print the error
// message.

   const x=2;
    

try{
    if(x>=0){
        console.log(x);
    }
    const x=3;
}
catch(error){
    console.error("element already declared");
}