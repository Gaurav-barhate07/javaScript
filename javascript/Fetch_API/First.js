let url ="https://jsonplaceholder.typicode.com/users";
let user = async()=>{
    let responce = await fetch(url);
    console.log(responce);
    
}