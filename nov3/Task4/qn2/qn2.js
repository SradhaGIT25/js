
testCases = [{ expected : ["abc", "acb", "bac", "bca", "cab", "cba"], input: "abc" },
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
     { expected : false, input : "@@#" },
     { expected : [ 'aS$##', 'bS$#@', 'cS$#@', 'a##$S', 'b@#$S', 'c@#$S' ], input : "@##$S" },
     { expected : false, input : 1.53 },
     { expected : false, input : undefined },
     { expected : false , input : null}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = permutations(testCase.input);
            
  for(let i=0;i<result.length;i++){
      if (result[i] !== testCase.expected[i]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
      console.log(`test ${index + 1} passed`);
  });
}

function permutations(string1){
    let array1=[];
    let array2=[];
    let array3=[];
    if(typeof string1 !== "string" || string1 === null || string1 === undefined){
        return false;
    }
    else{
        for(let i=0;i<string1.length;i++){
            if(typeof string1[i] !== "string"){
                return false;
            }
        }
        let array1=[...string1];


    let array2=array1.splice(0,1,"");
let string2=array1.toString();
let string3=string2.replaceAll(",","")
let string4=string3.trim();
// console.log(string4)

let arrayrev1=[];
arrayrev1=[...string4];
let arrayr1=[]
arrayr1=arrayrev1.reverse();
// console.log(arrayr1)
let newstr1=""
newstr1=arrayr1.toString()
let new1str1=""
new1str1=newstr1.replaceAll(",","")
// console.log(new1str1)



let prefix1="a"
for(let i=0;i<=string2.length-1;i++){
        prefix1=prefix1+string2[i];
}
// console.log(prefix1);

let word=string4;

let word1=prefix1[0]+word;
// console.log(word1)

let astring=""
astring=prefix1[0]+new1str1;
// console.log(astring);




let array12=[...string1]
let arra2=array12.splice(1,1,"");
let strin2=array12.toString();
let strin3=strin2.replaceAll(",","")
let strin4=strin3.trim();
// console.log(strin4)

let arrayrev2=[];
arrayrev2=[...strin4];
let arrayr2=[]
arrayr2=arrayrev2.reverse();
// console.log(arrayr2)
let newstr2=""
newstr2=arrayr2.toString()
let new1str2=""
new1str2=newstr2.replaceAll(",","")
// console.log(new1str1)





let prefix2="b"
for(let i=0;i<=strin2.length-1;i++){
        prefix2=prefix2+strin2[i];
}
// console.log(prefix2);

let nextWord=strin4;

let word2=prefix2[0]+nextWord;
// console.log(word2)

let bstring=""
bstring=prefix2[0]+new1str2;
// console.log(bstring);


let array13=[...string1]
let arra3=array13.splice(2,1,"");
let stri2=array13.toString();
let stri3=stri2.replaceAll(",","")
let stri4=stri3.trim();
// console.log(stri4)


let prefix3="c"
for(let i=0;i<=stri2.length-1;i++){
        prefix3=prefix3+stri2[i];
}
// console.log(prefix3);

let nexWord=stri4;

let word3=prefix3[0]+nexWord;
// console.log(word3)



let array14=[...string1]
let arra4=array14.splice(2,1,"");
let str2=array14.toString();
let str3=str2.replaceAll(",","")
let str4=str3.trim();
// console.log(str4)


let arrayrev3=[];
arrayrev3=[...str4];
let arrayr3=[]
arrayr3=arrayrev3.reverse();
// console.log(arrayr3)
let newstr3=""
newstr3=arrayr3.toString()
let new1str3=""
new1str3=newstr3.replaceAll(",","")
// console.log(new1str3)

let cstring=""
cstring=prefix3[0]+new1str3;
// console.log(cstring);
// console.log(astring);
array1.push(astring);
array1.push(bstring);
array1.push(cstring);
array1.push(word1);
array1.push(word2);
array1.push(word3);
// console.log(array1);
for(let i=0;i<array1.length;i++){
    if(array1[i].length === string1.length){
        array2.push(array1[i]);
    }
}
array2.shift();
array3=new Set(array2);
return (array3);
    }
}




