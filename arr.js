//array from {Shallow copy}
console.log(Array.from("allo"))
console.log(`Array from ${Array.from([1,2,3],(x)=>x+x)}`)
const a=Array.of("foo",2,"bar",true);
console.log(typeof(a))
//(value)=>value<40;PASSING A FUNCTION AS A AQGUMENT
let arr=[1,2,3,4]
console.log(arr.join(""))
console.log(arr.length);
