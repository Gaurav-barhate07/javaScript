setTimeout(() => {
    let count = 1;
while(count<100){
    console.log("hiii");
    count++;
    
}
// alert("hii thisis alert box");
}, 5000);


async function geet(){
//     console.log("hello","hii");

//  let con = document.getElementById("1").value;
//  document.getElementById("print").innerText=con;
let join = await fetch("https://chatgpt.com/c/698f3a59-9dfc-8324-a102-ed4349117567");
let data =await join.text()+join;
console.log(data);


    
}
