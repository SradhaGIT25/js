function expired(ms){
    let sec=Math.floor(ms/1000)%60;
    let mins=Math.floor(sec/1000*60)%60
    let hours=Math.floor(sec/1000*60*60)%24
    let days=Math.floor(sec/1000*60*60*24)
}
console.log(expired(1764385871929))