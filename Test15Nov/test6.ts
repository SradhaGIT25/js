import displayNotifications from './qn6.ts'
const testCases:obj[]=[{expected: ["Welcome!",
    "Profile updated",
    "New message received"],
      input:["Welcome!", "Profile updated", "New message received"]}],


type obj={
    input : string | number | boolean | object | null | undefined | string[] | number[] | string[][] | object[][],
    expected: string | boolean,
}

test(testCases);
function test(testCases:obj[]):void{
    testCases.forEach((testCase,index)=>{
        const result:obj[] | boolean = displayNotifications(testCase.input);

        if(typeof result === "boolean"){
            if(result===testCase.expected){
                console.log(`test ${index+1} passed`);
            }
            else{
                console.log(`test ${index+1} failed`);
            }
        }
        else if(typeof result === "object"){
            for(let i=0;i<result.length;i++){
                if(result[i]!==testCase.expected[i]){
                console.log(`test ${index+1} failed`);
            }
            }
            console.log(`test ${index+1} passed`);
            
        }
    })
}