export default function displayNotifications(notifications:string[]):string{
    let array:string[]=[];
    let p:Promise<string>;
    for(let i=0;i<notifications.length;i++){
        array=[]
        p=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(notifications[i]);
            
        array.push(p);
        console.log(array);
        },2000);
        })
        
    }

// return (array);
}
// displayNotifications( ["Welcome!", "Profile updated", "New message received"])