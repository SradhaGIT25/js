testCases = [{ expected :"$10" , input:12 }, 
{ expected :"$10", input:1 } , 
{ expected : false , input:-40 },
{ expected : false , input:0 },
{ expected : "$20" , input:13 },
{ expected : false , input:"sradha"},
{ expected : "$20" , input:59},
{ expected : "$15" , input:60},
{ expected : "$15" , input:65},
{ expected : "$15" , input:100},
{ expected : "$20" , input:50},
{ expected : "$10" , input:10},
{ expected : false , input:true},
{ expected : false , input: false},
{ expected : false , input: [] },
{ expected : false , input1:{}}];

test(testCases);
function test(testCases) {
    testCases.forEach((testCase, index) => {
    const result = getTicketPrice(testCase.input);
            

    if (result === testCase.expected) {
      console.log(`test ${index + 1} passed`);
    } else {
      console.log(`test ${index + 1} failed`);
    }
  });
}
function getTicketPrice(age){
    let ticketPrice=0;
    if(age<=0 || typeof age!=="number"){
        return false;
    }
    else if(age>0 && age<=12){
        ticketPrice="$10";
    }
    else if(age>=13 && age<=59){
        ticketPrice="$20";
    }
    else{
        ticketPrice="$15";
    }
    return ticketPrice;
}
// getTicketPrice(11);
// getTicketPrice(13);
// getTicketPrice(14);
// getTicketPrice(59);
// getTicketPrice(61);