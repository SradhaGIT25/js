function hornerseval(poly,value){
    let answer=0;
    let len=polynomial.length-1;
for(let i=0;i<polynomial.length;i++){
answer+=polynomial[i]*(Math.pow(value,len));
len--;
}
return answer;
}
console.log(hornerseval((2,-6,2,-1),3))
console.log(hornerseval((2,0,3,1),2))


