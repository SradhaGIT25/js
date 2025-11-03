const person={
    firstName:"John",
    lastName:"Doe",
    birthYear:1990,
}

person.fullName=getFullName(person);
person.age=getAge(person);

function getFullName(obj){
    let fullN=obj.firstName + " " + obj.lastName;
    return fullN;
}

function getAge(obj){
    const date=new Date();
    const currentYear=date.getFullYear();
    let ageNow=currentYear-obj.birthYear;
    return ageNow;
}
console.log(person);