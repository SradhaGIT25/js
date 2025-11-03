function createRandom(min,max){
let randomNum=Math.floor(Math.random()*(max-min))+min;
console.log(randomNum);
}
createRandom(50,100)