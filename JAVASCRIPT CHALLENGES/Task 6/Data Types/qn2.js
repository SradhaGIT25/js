// let checks=[{},[], '...' ]
function checker(checks){
        if(Array.isArray(checks)){
        return true
        }
        else{
        return false
        }
        }
console.log(checker({}))




function checker(checks){
        if(Array.isArray(checks)){
        return true
        }
         else{
        return false
        }
        }
console.log(checker([]))




function checker(...checks){
        if(Array.isArray(checks)){
        return true
        }
         else{
        return false
        }
        }
console.log(checker(1,2,3))

