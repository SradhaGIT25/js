function loginIn(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Login successful")
    },3000)
});
}
async function logging(){
    console.log("logging");
    const value=await loginIn();
    console.log(value);
}
logging();