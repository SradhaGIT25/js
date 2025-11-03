function numberConversion(string){
    let changed=Number(string);
    console.log(changed)
}
numberConversion('42');
numberConversion('42px');
numberConversion('');
numberConversion('null');
numberConversion(null);
numberConversion(undefined);
numberConversion(true);                                   
numberConversion(false);