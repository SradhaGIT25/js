type obj={
id:number,
profile:pro,
application:appli,
}

type pro={
personal:per,
professional:prof
}

type per={
name:string,
dob:string,
active:boolean,
}
type exp={
totalYears:number,
domain:string[],
}
type perf={
score:string,
lastReview:string
}

type prof={
experience:exp
performance:per
}

type appli={
  position:pos,
  submission:sub,
}

type pos={
  title:string,
  level:string,
}
type sub={
  date:string,
  referred:string,

}
export default function SortCandidatesByScoreAndExperience(candidates:obj[]){

let pactive=candidates.filter((candidate)=>candidate.profile.personal.active===true);
// console.log(pactive)


let vscore=pactive.filter((p)=>p.profile.professional.performance.score!==null);
// console.log(vscore);

let exp=vscore.filter((ex)=>ex.profile.professional.experience.totalYears >= 2);
// console.log(exp);


function SortByKey(arr,key,order){
    let array=[]
    let newArray=[]

    for(let i=0;i<arr.length;i++){
        let element=arr[i];
        array.push(element[key]);
    }

    if(order==="asc"){
        array.sort((a,b)=>a-b)
    }
    else if(order==="desc"){
            array.sort((a,b)=>b-a);
        }

        for(let i=0;i<array.length;i++){
            let element=array[i];
            for(let j=0;j<arr.length;j++){
                let ele= arr[j];
                if(ele[key]===element){
                    newArray.push(ele);
                }
            }
        }
    
return newArray;
}
let a= (SortByKey(exp,'score','desc'));

let b = (SortByKey(a,'totalYears','desc'));

let c = (SortByKey(b,'date','asc'));

let result = (SortByKey(c,'name','asc'));


for(let i=0;i<exp.length;i++){
let date1:Date=new Date();
let cyear=date1.getFullYear(),
let birthYear:Date=new Date(exp[i].personal.dob);
let year=birthYear.getFullYear()
 let date2:Date=new Date(exp[i].application.submission.date);
let remdates:number=(date1.getTime()-date2.getTime());
let rem:number=Math.floor(remdates/(1000*24*60*60));
console.log(rem);

exp[i].submittedDaysAgo=rem;
exp[i].age=cyear-year,
}
   console.log(exp);

   let perArray:obj[]=[]
let person={}
  for(let i=0;i<exp.length;i++){
    person.name=exp[i].personal.name,
    person.age=exp[i].age
    person.experience=exp[i].experience.totalYears,
    person.score=exp[i].performance.score,
    person.submittedDaysAgo=exp[i].submittedDaysAgo,
    perArray.push(person),
  }
return perArray;
    
}
console.log(SortCandidatesByScoreAndExperience([
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
]))