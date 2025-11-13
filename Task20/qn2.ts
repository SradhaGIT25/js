type obje={
    maxTemp : number,
    minTemp : number,
    averageTemp : number,
    hottestPoint : number[],
    coldestPoint : number[]
}

export default function AnalyzeHeatmap(heatmap:number[][]){
    if(!Array.isArray(heatmap) || heatmap.length === 0 || heatmap === null || heatmap === undefined){
        return false;
    }
    else{
        for(let i=0;i<heatmap.length;i++){
            if(!Array.isArray(heatmap[i]) || heatmap[i].length===0){
                return false;
            }
            for(let j=0;j<heatmap[i][j].length;j++){
                if(typeof heatmap[i][j]!=="number"){
                    return false;
                }
            }
        }

    let size:number=heatmap.length*heatmap[0].length;
    let sum:number=0;
    let avg:number;
    let temp:number[];
    let max:number;
    let high:number;
    let maxArray:number[]=[]
    let min:number;
    let minArray:number[]=[]
    let low:number;
    let h:number[]=[]
    let hs:number[][]=[]
    let c:number[]=[]
    let cs:number[][]=[]

for(let i=0;i<heatmap.length;i++){
    temp=heatmap[i];
    max=Math.max(...temp);
    maxArray.push(max);
    
    min=Math.min(...temp);
    minArray.push(min);
}
high=Math.max(...maxArray)
low=Math.min(...minArray)

for(let i=0;i<heatmap.length;i++){
        for(let j=0;j<heatmap[i].length;j++){
        if(heatmap[i][j]===high){
            h=[]
            h.push([i,j]);
            hs.push(h);
        }
        if(heatmap[i][j]===low){
            c=[];
            c.push([i,j]);
            cs.push(c)
        }
        sum=sum+heatmap[i][j];
    }
}
let hot=hs[0].flat(1);
let cold=cs[0].flat(1);
avg=Number((sum/size).toFixed(1));
// console.log(avg);

let obj:obje={};
obj.maxTemp=high;
obj.minTemp=low;
obj.averageTemp=avg;
obj.hottestPoint=hot;
obj.coldestPoint=cold;
return (obj)
}

    }
    

console.log(AnalyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))
console.log(AnalyzeHeatmap([[30,32,35],[28,40,43],[31,36,38]]))
console.log(AnalyzeHeatmap([[30,32,35],[28,40,40],[31,36,38]]))
console.log(AnalyzeHeatmap([[30,28,35],[28,40,40],[31,36,38]]))
console.log(AnalyzeHeatmap([[30,-32,35],[28,40,40],[31,36,38]]))