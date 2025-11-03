let n=3;
let rows=n;
let cols=n;
let a=[];
let val=1
let temp1=0;
let temp2=0;
let temp3=0;

for(let i=0;i<rows;i++){
    a[i]=[]
    for(let j=0;j<cols;j++){
        a[i][j]=val++
    }  
}
        temp1=a[1][0]
        a[1][0]=a[2][1]
        a[2][1]=temp1

        temp2=a[2][2]
        a[2][2]=a[1][1]
        a[1][1]=temp2

        temp3=a[2][1]
        a[2][1]=a[1][2]
        a[1][2]=temp3

console.log(a)