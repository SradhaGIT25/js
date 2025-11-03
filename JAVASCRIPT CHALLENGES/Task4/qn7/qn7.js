testCases = [{ expected : "#FFA500", input: [255, 165, 0] },
    { expected : "#FFFFFF", input: [255, 255, 255] },
    { expected : "#99FF99", input: [153, 255, 153] },
    { expected : false, input: ["255", "165", "0"] },
    { expected : false, input: ["twfud", "hxgjw", "hgjh"] },
    { expected : false, input: ["twt6fud", "hx5gjw", "hg45jh"] },
    { expected : false, input: ["twf@#%ud", "hxg#%^^jw", "hg%^&jh"] },
     { expected : false, input : [["1,2,3"], ["0, 7"]] }, 
     { expected : false, input : 0 },
     { expected : false, input : 12 },
     { expected : false, input : [["hguk"], ["hjkl"]] },
     { expected : false, input : "11" },
     { expected : false, input : "string" },
     { expected : false, input : [] },
     { expected : false, input : -13 },
     { expected : false, input : true },
     { expected : false, input : false},
     { expected : false, input : "" },
     { expected : false, input : {} },
     { expected : false, input : "hg56" },
     { expected : false, input : "@@#" },
     { expected : false, input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];
    
     test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = rgbToHex(testCase.input);
            
    console.log(testCase.expected , " " , result )
let k=0;
for(let i=0;i<testCase.expected.length;i++){
    if (testCase.expected[i] !==result[i] ) {
        k=1;
    } 
}
if(k===1){
    console.log(`test ${index + 1} failed`);
}else{
    console.log(`test ${index + 1} passed`);
}
  });
}
     
function rgbToHex(colorCode){
    if(!Array.isArray(colorCode) || colorCode.length === 0 || colorCode === null || colorCode === undefined){
        return false;
    }
    else{
        for(let i=0;i<colorCode.length;i++){
            if(typeof colorCode[i]!== "number"){
                return false;
            }
        }
        
        let RR=colorCode[0];
        R=RR.toString(16);
        let GG=colorCode[1];
        G=GG.toString(16);
        let BB=colorCode[2];
        B=BB.toString(16);

            if(R === "0" ){
                R=R + "0";
            }
            else if(G === "0" ){
                G=G + "0";
            }
            else
                if(B === "0"){
                B=B + "0";
            }
        let hex="";
        hex=R+G+B;
        let upper= "#" + hex.toUpperCase() ;
        return  upper;
    }
}

    

