
    
    type obje={
        maxTemp: number,
        minTemp:number,
        averageTemp:number,
        hottestPoint:number[],
        coldestPoint:number[],
    }
export default function AnalyzeHeatMap(heatmap:number[][]):obje | boolean{

    if(!Array.isArray(heatmap) || heatmap.length===0 || heatmap === null || heatmap === undefined){
        return false;
    }
    else{
        for(let i=0;i<heatmap.length;i++){
            if(!Array.isArray(heatmap[i])){
                return false;
            }
            for(let j=0;j<heatmap[i].length;j++){
                if(typeof heatmap[i][j]!=="number"){
                    return false;
                }
            }
        }

        let obj:obje={};
    let maxind:number[][]=[];
    let minind:number[][]=[];
    let temp:number[]=heatmap.flat(Infinity);
    let max:number=Math.max(...temp);
    let min:number=Math.min(...temp);
    let size:number=heatmap.length*heatmap[0].length;
    let sum:number=0;
for(let i=0;i<temp.length;i++){
sum+=temp[i];
}
let avg=Number((sum/size).toFixed(1));


for(let i=0;i<heatmap.length;i++){
    for(let j=0;j<heatmap[i].length;j++){
        if(heatmap[i][j]===max){
            maxind.push([i,j]);
        }
    }
}
for(let i=0;i<heatmap.length;i++){
    for(let j=0;j<heatmap[i].length;j++){
        if(heatmap[i][j]===min){
            minind.push([i,j]);
        }
    }
}

obj.maxTemp=max;
obj.minTemp=min;
obj.averageTemp=avg;
obj.hottestPoint=maxind[0];
obj.coldestPoint=minind[0];
return (obj)

    }
    

}
console.log(AnalyzeHeatMap([[30,32,35],[28,40,33],[31,36,38]]));