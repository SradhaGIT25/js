let inputObj={name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']};

function copyObj(object){
    let newObj={}
    newObj.name=object.name,
    newObj.country=object.country,
    newObj.dataTypes=object.dataTypes,

console.log(newObj);
}
copyObj(inputObj);