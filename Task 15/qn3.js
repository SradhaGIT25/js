function spiralMatrix(size){
    let num=size*size
    let array=[]
    let first=[]
    let second=[]
    let fourth=[]
    let third=[]
    let main=[];
    let sec=[]
    let next;
 let j=size-1;
    
    
// creating numbers
for(let i=1;i<=num;i++){
   array.push(i);
}
console.log(array)

// creating null matrix main
for(let i=0;i<size-1;i++){
    let sample=[];
    for(let i=0;i<size-1;i++){
    sample.push([]);
}
main.push(sample);
}
console.log(main);

// while(next!==num){

// creating the first row
for(let i=0;i<array.length;i++){
    first=array.slice(0,size);
}
console.log(first);
main.unshift(first);
console.log(main);

// taking the last number
next=first[first.length-1];
console.log(next);


// creating the right side of the matrix
let k=size-1;
for(let i=1;i<main.length;i++){
    main[i][k]=next+i;
    // next=next+i;
    console.log(next);
    second.push(main[i][k]);
}

console.log(second);
console.log(main)
next=second[second.length-1]
console.log(next);


// creating the last row
let i=size-1;
for(let j=main.length-2;j>=0;j--){
    // console.log(next1)
main[i][j]=next+1;
next=next+1;
console.log(next);
third.push(main[i][j]);
}

console.log(third);
console.log(main);

next=third[third.length-1];
console.log(next)

// creating the left side
for(let i=main.length-2;i>0;i--){
    main[i][0]=next+1;
    next=next+1;
    console.log(next);
    fourth.push(main[i][0]);
}
console.log(main)

next=fourth[fourth.length-1];
console.log(next)






// the inner rows and columns
for(let j=1;j<main.length-1;j++){
i=size-2;
    main[i][j]=next+1;
    next=next+1;
    console.log(next);

}
console.log(main)

for(let i=0;i<main.length;i++){
    console.log(main[i]);
}


}



console.log(spiralMatrix(4));








