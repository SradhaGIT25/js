import SeatingArrangementsWithRoundTable from './qn2.ts'

const testCases:obj[]=[{expected : [ [ 'A', 'B', 'C' ], [ 'A', 'C', 'B' ] ]  , input : ["A","B","C"]},
{expected : [
  [ 'A', 'B', 'C', 'D' ],
  [ 'A', 'B', 'D', 'C' ],
  [ 'A', 'C', 'B', 'D' ],
  [ 'A', 'C', 'D', 'B' ],
  [ 'A', 'D', 'B', 'C' ],
  [ 'A', 'D', 'C', 'B' ]
]  , input :[ 'A', 'B', 'C', 'D' ]},
{expected :  [
  [ 'AA', 'BB', 'CC', 'DD' ],
  [ 'AA', 'BB', 'DD', 'CC' ],
  [ 'AA', 'CC', 'BB', 'DD' ],
  [ 'AA', 'CC', 'DD', 'BB' ],
  [ 'AA', 'DD', 'BB', 'CC' ],
  [ 'AA', 'DD', 'CC', 'BB' ]
], input :  [ 'AA', 'BB', 'CC', 'DD' ]},
{expected :  [
  [ 1, 2, 3, 4 ],
  [ 1, 2, 4, 3 ],
  [ 1, 3, 2, 4 ],
  [ 1, 3, 4, 2 ],
  [ 1, 4, 2, 3 ],
  [ 1, 4, 3, 2 ]
] , input : [1,2,3,4]},
{expected :  [
  [ '11', '22', '33', '44' ],
  [ '11', '22', '44', '33' ],
  [ '11', '33', '22', '44' ],
  [ '11', '33', '44', '22' ],
  [ '11', '44', '22', '33' ],
  [ '11', '44', '33', '22' ]
] , input : [ '11', '22', '33', '44' ] },
{expected :  false , input : []},
{expected :  false , input : "5"},
{expected :  false , input : "-5" },
{expected :  [[0]] , input : [0]},
{expected :  false , input : "" },
{expected :  false , input : true },
{expected :  false , input : false },
{expected :  false , input : 5},
{expected :  false , input : -5},
{expected :  false , input : 1.5},
{expected :  false , input : {} },
{expected :  false , input : [1,2,3,4] },
{expected :  false , input : undefined },
{expected :  false , input : null }];

type obj={
    input : string | boolean | number | number[] | string[] | null | object | undefined | number[][] | string[][] | object[] | object[][] 
    expected : number[][] | string[][] | boolean;
}

test(testCases);
function test(testCases: obj[]):void{
    testCases.forEach((testCase,index) =>{
        const result: false | number[][] = SeatingArrangementsWithRoundTable(testCase.input);

        if(typeof testCase.expected === "boolean"){
            if(result === testCase.expected){
                console.log(`test ${index + 1} passed`);
            }
            else{
                console.log(`test ${index + 1} failed`);
            }
        }
        else{
        for(let i=0;i<result.length;i++){
          for(let j=0;j<result[i].length;j++){
            if (result[i][j] !== testCase.expected[i][j]) {
      console.log(`test ${index + 1} failed`);
    } 
  }
}
      console.log(`test ${index + 1} passed`);
  }
}
    );
}
          
      