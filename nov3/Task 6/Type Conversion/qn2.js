function typeConversion(number){
    let binary=number.toString(2);
    console.log(`Binary is ${binary}`)
    let octal=number.toString(8);
    console.log(`Octal is ${octal}`)
    let hex=number.toString(16);
    console.log(`Hexadecimal is ${hex}`)
}
typeConversion(255)