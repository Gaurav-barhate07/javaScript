let num =92;
const prom = new Promise((res,rej)=>{
    setTimeout(()=>{
         if(num===12){
            return res("value is correct");
         }
         return rej("value is incorrect");
    },5000);
})
// prom.then((d)=>{
//     console.log("exelant"+d);
    
// }).catch((e)=>{
//     console.log("Error"+e);
    
// })

async function promisehandlar(){
    try{
   let result =await prom;
   console.log("good : "+result);
   

    }catch(e){
        console.log("nonsens"+e);
        
    }
}
promisehandlar();