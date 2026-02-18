// Spread operator for objects
let arr1 =[10,20,30,40,50];
let arr2=[60,70,80,90,100];
let arr3 =[...arr1,...arr2];
console.log(arr3);


let obj1={
    name:"gaurav",
    age:21,
    city:"pune"
}
let obj2={
    country:"india"
}
let obj3={obj1,obj2}
let obj4={...arr3,...obj2};
console.log(obj3,obj4);
