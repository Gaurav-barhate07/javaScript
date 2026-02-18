let num = 30;
try{
if(num>10){
    throw new Error("value is greater than 10")
}
}catch(e){
    console.log(e);
    
}
console.log("hello");
