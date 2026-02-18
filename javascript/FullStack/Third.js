function windowsde(){
    
  
  let con= window.confirm("are you 18 are you soure");
  console.log(con);
  
  if(con===true){
    window.open("https://www.google.com/");
  }
  else{
     window.open("http//:www/cartoon.com/")
  }

}

function clickdevice(){
    console.log("width: "+screen.width);
    
}