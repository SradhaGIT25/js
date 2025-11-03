function deepClone(obj){
    // origial object
    console.log(obj)

    // cloned object
    let copyObj=JSON.parse(JSON.stringify(obj));
    console.log(copyObj)

    // modified original object
    obj.user.name="shilpa"
    console.log(obj);

    // deep cloned obj without chnage
    console.log(copyObj);
}
deepClone({user : {name : "sradha" , age:22 , job:"Engineer"}});

