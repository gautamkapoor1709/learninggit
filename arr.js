//array from {Shallow copy}
console.log(Array.from("allo"))
console.log(`Array from ${Array.from([1,2,3],(x)=>x+x)}`)
const a=Array.of("foo",2,"bar",true);
console.log(typeof(a))
//(value)=>value<40;PASSING A FUNCTION AS A AQGUMENT
let arr=[1,2,3,4]
console.log(arr.join(""))
console.log(arr.length);
//feature
let newa=[1,2,3,4,5,6,7];
newa.pop();
console.log(newa);//printing
console.log("New msg");
console.log("Changes");