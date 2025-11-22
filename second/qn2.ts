function checkSameWeek(date1:date,date2:date){
    
    let d1=new Date(date1);
    let day1=d1.getDay();

    let d2=new Date(date2);
    let day2=d2.getDay();
    
    console.log(day1);
    console.log(day2);

    
    

}
console.log(checkSameWeek("2025-01-02","2025-01-05"));