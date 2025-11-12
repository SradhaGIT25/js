export default function MultiFieldSorter(data, sortKeys){
    let array:=[]
    let newArray=[]
for(let i=0;i<data.length;i++){
    for(let j=0;i<sortKeys.length;j++){
        let element=data[i];
        array.push(element[sortKeys[j].key]);
    }
}

    if(sortKeys[j][order]==="asc"){
        array.sort((a,b)=>a-b)
    }
    else if(sortKeys[j][order]==="desc"){
            array.sort((a,b)=>b-a);
        }

        for(let i=0;i<array.length;i++){
            let element=array[i];
            for(let j=0;j<data.length;j++){
                let ele= data[j];
                if(ele[sortKeys[j][key]]===element){
                    newArray.push(ele);
                }
            }
        }
    
return newArray;


}
console.log(MultiFieldSorter([
  { name: 'Charlie', age: 25, joinDate: '2022-06-01' },
  { name: 'alice', age: 30, joinDate: '2020-03-15' },
  { name: 'Bob', age: 30, joinDate: '2021-05-10' },
  { name: 'bob', age: 30, joinDate: '2019-01-12' }
], [
  { key: 'age', order: 'desc' },
  { key: 'joinDate', order: 'asc' },
  { key: 'name', order: 'asc' }
]))


