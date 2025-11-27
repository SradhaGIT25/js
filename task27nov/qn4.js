function evaluatepolynomial(polynomial,value){
    let answer=0;
    let len=polynomial.length-1;
for(let i=0;i<polynomial.length;i++){
answer+=polynomial[i]*(Math.pow(value,len));
len--;
}
return answer;
}


console.log(evaluatepolynomial([3,-2,1],-1))
console.log(evaluatepolynomial([2,-6,2,-1],3))
// console.log(evaluatepolynomial([-(2/3),2,-1],3))