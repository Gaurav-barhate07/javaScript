// console.log("hello");

// push array method add elsement at last index
let pushArray=["barhate","gaurav","uttam"]
pushArray.push("karbhari","push");
console.log(pushArray);

//pop array method remove last elsement
let popArray=["barhate","gaurav","uttam","karbhari","pop"];
popArray.pop()
console.log(popArray);

//shift array method remove first elsement
let shiftArray=["barhate","gaurav","uttam","karbhari","shift"]
shiftArray.shift();
console.log(shiftArray);

//unshift array method add elsement at first index
let unshiftArray=["gaurav","uttam","unshift"];
unshiftArray.unshift("barhate");
console.log(unshiftArray);

//splice array method add or remove elsement at perticular index
let spliceArray=[10,20,30,40,50]
spliceArray.splice(3,4);
console.log(spliceArray);


//slice array method remove elsement from perticular index
let sliceArray =[10,20,30,40,50,60,70,80]
let arr =sliceArray.slice(1,7)
console.log(arr);


//length array method count elsement in array
let  lengthArray =["barhate","gaurav","uttam","karbhari"]
console.log(lengthArray.length)

//indexof array method show index of elsement
let indexofArray =["barhate","gaurav","uttam"];
console.log(indexofArray.indexOf("gaurav"));

//concat array method join two array

let a= [1,2,3,4];
let b =[5,6,7,8]
console.log(a.concat(b));

// join array methos join elsement with some string
let joinArray =["barhate","gaurav","uttam"]
console.log(joinArray.join("-"));


//reverse array methos reverse elsement in array
let reverseArray=["uttam","gaurav","barhate"]
console.log(reverseArray.reverse());

//includes array method check elsement is present or not
let includesArray =["barhate","gaurav"];
console.log(includesArray.includes("gaurav"))

//forEach array method use to loop array
let forEachArray =["barhate","gaurav","uttam"]
forEachArray.forEach(function(name){
    console.log(name);
    
})

//map array method use to create new array
let mapArray =[1,2,3,4,5]
let newArray =mapArray.map(num=>num*2);
console.log(newArray);

// filter array method use to filter elsement based on condition
let filterArray=[10,15,20,25,30,35]
let filtereArray =filterArray.filter(num=>num>10);
console.log(filtereArray);


//reduce array method use to reduce array to single value
let reduceArray =[1,2,3,4,5];
let sum = reduceArray.reduce((sum,num)=>sum+num,0);
console.log(sum);
