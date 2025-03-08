// function myfriend(){
//     console.log("welcome to apna collage ");
// }
// myfriend(); 



//Arrow function

//   let arrowSum=(a,b)=>{
//     console.log(a+b);
//   };


//function of count vowels 

// function countVowels(str){
//     let count =0;
//     for (const char of str){
//         if (char ==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
//             count ++
//         }
//     }
//     console.log(count);
// }


//function for each loop 
//CallbackFunction : Here, it is a function to execute for each element in the array
//*A callback is a function passed as an argument to another function.
//let arr=["sahil","Aman","Krish","Rajan"];
/*arr.forEach(function peintval(val){
console.log(val);
})*/

/*arr.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr);
});
*/



//map 

// map creat a new array with the result of some operation. the value its callback return are used to from new array 

/*let num= [1,2,3,4,5];
let newArr= num.map((val)=>{
    return val/2;
});
console.log(newArr);*/




//filter Array Method 
// Creates a new arrays of element that give true for a condition/filter
/* let num =[4,8,6,2,5,6,4,8,7,1,0];
 let even =num.filter((val)=>{
    return val%2===0;
 });
 console.log(even);*/





 //reduse method 
 //perform some operation & reduces the array to singlr value. it return that single value.
 let num =[4,8,6,2,5];
  const output= num.reduce((res,curr)=>{
    return res+curr;
 });
 console.log (output);