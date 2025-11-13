import SortCandidatesByScoreAndExperience from './qn2.ts'

const testCases: obj[]=[{expected : [
  {
    name: "Eva Green",
    age: 31,
    experience: 6,
    score: 93.2,
    submittedDaysAgo: 293
  },
  {
    name: "Alice Johnson",
    age: 33,
    experience: 5,
    score: 91,
    submittedDaysAgo: 283
  },
  {
    name: "Brian Lee",
    age: 36,
    experience: 8,
    score: 87.5,
    submittedDaysAgo: 299
  }
]  , input : [
  {
    id: 1001,
    profile: {
      personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
      professional: {
        experience: { totalYears: 5, domains: ["frontend", "ui"] },
        performance: { score: "91%", lastReview: "2024-12-01" }
      }
    },
    application: {
      position: { title: "Frontend Engineer", level: "Mid" },
      submission: { date: "2025-02-10", referred: true }
    }
  },
  {
    id: 1002,
    profile: {
      personal: { name: "Brian Lee", dob: "1989-05-05", active: true },
      professional: {
        experience: { totalYears: 8, domains: ["backend", "api"] },
        performance: { score: "87.5%", lastReview: "2024-11-28" }
      }
    },
    application: {
      position: { title: "Backend Engineer", level: "Senior" },
      submission: { date: "2025-01-25", referred: false }
    }
  },
  {
    id: 1003,
    profile: {
      personal: { name: "Clara Doe", dob: "1995-11-30", active: false },
      professional: {
        experience: { totalYears: 4, domains: ["fullstack"] },
        performance: { score: "90%", lastReview: "2024-09-05" }
      }
    },
    application: {
      position: { title: "Fullstack Developer", level: "Mid" },
      submission: { date: "2025-01-12", referred: true }
    }
  },
  {
    id: 1004,
    profile: {
      personal: { name: "David Kim", dob: "1990-03-17", active: true },
      professional: {
        experience: { totalYears: 3, domains: ["frontend"] },
        performance: { score: null, lastReview: "2024-08-10" }
      }
    },
    application: {
      position: { title: "UI Developer", level: "Junior" },
      submission: { date: "2025-02-01", referred: true }
    }
  },
  {
    id: 1005,
    profile: {
      personal: { name: "Eva Green", dob: "1994-10-22", active: true },
      professional: {
        experience: { totalYears: 6, domains: ["frontend", "design"] },
        performance: { score: "93.2%", lastReview: "2024-12-15" }
      }
    },
    application: {
      position: { title: "Frontend Architect", level: "Senior" },
      submission: { date: "2025-01-20", referred: false }
    }
  }
]}, 

{expected :  false , input : [] },
{expected :  false , input : [1,2,3,4]},
{expected :  false , input : "5"},
{expected :  false , input : 5 },
{expected :  false , input : ["1","2","3","4"]},
{expected :  false , input : "" },
{expected :  false , input : ["1,2,3,4"]},
{expected :  false , input : true },
{expected :  false , input : [0] },
{expected :  false , input : false },
{expected :  false , input : -3},
{expected :  false , input : {} },
{expected :  false , input : 0 },
{expected :  false , input : undefined },
{expected :  false , input : null }];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    expected : obje | boolean;
}

type obje={
    name : number,
    age : number,
    experience : number,
    score : number[],
    submittedDaysAgo : number[]
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: boolean | obje =  SortCandidatesByScoreAndExperience(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else if(typeof testCase.expected === "object"){
            for(let i=0;i<result.length;i++){
      if (!objectEquality(result,testCase.expected)) {
      console.log(`test ${index + 1} failed`);
    } 
}
      console.log(`test ${index + 1} passed`);
  }
        }
    );
}

function objectEquality(obj1:object,obj2:object){
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
        return "Not Equal";
        }
    }
        return "Equal";
    }
    else{
        return "Not Equal";
    }
    }
    }