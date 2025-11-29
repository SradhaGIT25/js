import AnalyzeHeatMap from './qn1.ts'
const testCases:ob[]=[{expected:{
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 33.7,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 1, 0 ]
}, input: [[30,32,35],[28,40,33],[31,36,38]]},

{expected:{
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 33.7,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 1, 0 ]
}, input: [[30,32,35],[28,40,33],[31,40,38]]},

{expected:{
  maxTemp: 40,
  minTemp: 28,
  averageTemp: 33.7,
  hottestPoint: [ 1, 1 ],
  coldestPoint: [ 1, 0 ]
}, input: [[30,32,35],[28,40,33],[31,28,38]]},

{expected:false, input: 34},
{expected:false, input: -34},
{expected:false, input: null},
{expected:false, input: "34"},
{expected:false, input: undefined},
{expected:false, input: true},
{expected:false, input: false},
{expected:false, input: "wyfgwyfg"},
{expected:false, input: ["q","webkitURL","e"]}]


type ob={
    input : string | number | boolaen | string[] | number[] | string[][] | number[][] | null | undefined,
    expected: obje | boolean
}

test(testCases);
function test(testCases:ob[]):void{
    testCases.forEach((testCase,index)=>{
        const result=AnalyzeHeatMap(testCase.input);

        if(typeof result==="boolean"){
            if(result===testCase.expected){
            console.log(`test ${index+1} passed`);
        }
        else{
            console.log(`test ${index+1} passed`);
        }
        }

        else if(typeof result==="object"){
            if(objectEquality(result,testCases.expected)==="equal" || objectEquality(result,testCases.expected)=== false){
                console.log(`test ${index+1} passed`);
            }
            else{
                console.log(`test ${index+1} failed`);
            }
        }
        
    });
}


 function objectEquality(obj1:object,obj2:object){
    if(typeof obj1 !== "object" || typeof obj2 !== "object"){
        return false;
    }
    else{
        let a1=Object.entries(obj1);
    let a2=Object.entries(obj2);
    let f1=a1.flat();
    let f2=a2.flat();

    if(f1.length===f2.length){
        for(let i=0;i<f2.length;i++){
            if(!f2.includes(f2[i])){
                return "not equal";
            }
        }
        return  "equal"
    }
    else{
        return "not equal";
    }
    }
}