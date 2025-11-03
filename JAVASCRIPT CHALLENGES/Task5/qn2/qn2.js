testCases = [{ expected : [ {weekNumber: 1, birthdays: 1}, {weekNumber: 10, birthdays: 1}, {weekNumber: 24, birthdays: 1} ] , input: [new Date(2025, 0, 4), new Date(2025, 2, 8), new Date(2025, 5, 23)]},
    { expected :false, input: 9 },
    { expected : false, input: 1994 },
    { expected : false, input: 2025 },
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
    const result = dateCheck(testCase.input);
            
    console.log(testCase.expected , " " , result )

    if(Array.isArray(result)){
    for(let i=0;i<testCase.expected.length;i++){
    if (objectEquality(result[i],testCase.expected[i]) === "equal" || (objectEquality(result[i],testCase.expected[i]) === false) ) {
        console.log(`test ${index + 1} passed`);
    } else {
        console.log(`test ${index + 1} failed`);

    }
}
    }
    else{
        if(result === testCase.expected){
        console.log(`test ${index + 1} passed`);
    }
    else{
        console.log(`test ${index + 1} failed`);
    }
    }
  });
}

function dateCheck(dates){
    if(!Array.isArray(dates) || dates.length===0 || dates === null || dates === undefined){
        return false;
    }
    else{
        for(let i=0;i<dates.length;i++){
            if(typeof dates[i] === "string" || Array.isArray(dates[i])){
                return false;
            }
        }
        let month=[];
        let day=[];
        let weekNum=[];
        let birthdays;
        let obj={};
        let array1=[];
        let fullarray=[];

for(let i=0;i<dates.length;i++){
    birthdays=1;
    month=dates[i].getMonth(dates[i]);
    day=dates[i].getDate(dates[i]);
    console.log(weekNum)
    if(month==0){
        weekNum=Math.ceil((day)/7);
    }
    else{
        weekNum=(Math.ceil((day)/7))+(month*4);
    }
    console.log(`${i}'s month is ${month} , day is ${day} , weeknumber is ${weekNum}`);
     obj.weekNumber=weekNum;
    array1.push(weekNum);
    // console.log(array1);
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array1.length;j++){
            if(i !== j){
                if(array1[i]===array1[j]){
                    birthdays++;
                }
            }
        }
        obj.birthdays=birthdays;
        birthdays=1;
    }

    fullarray.push(obj);
    obj={};
}
return (fullarray);
    }
    
}

function objectEquality(obj1,obj2){
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return false;
    }
    else{
    let array1=Object.entries(obj1);
    let flat1=array1.flat();
    let array2=Object.entries(obj2);
    let flat2=array2.flat();
    if(flat1.length===flat2.length){
    for(let i=0;i<flat1.length;i++){
    if(!flat2.includes(flat1[i])){     
        return "not equal";
        }
    }
        return "equal";
    }
    else{
        return "not equal";
    }
    }
    }


    


