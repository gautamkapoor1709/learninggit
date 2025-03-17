//Array and there opertations
let arr=[23,4,56,65];
let arra=new Array(5,4,3,2,1)// Dynamic array
//arra.sort();
console.log(arra);
console.log(arra.length);
console.log(arr);
//Sum of all elements

function sarr(arra){
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arra[i];
}
return sum;
}
console.log("The sum of all elements: ");
console.log(sarr(arr));

//isArray() that the passed value is an array
// Polyfills

console.log(Array.isArray(arra));
let index=-1;
console.log(`The index is ${index} and value ${arra.at(index)}`);
//Creating my own at
function oat(array,index){
    if(index>0){
        return array[index]
    }else if(index<0){
        return array[array.length+index];
    }
}

console.log(oat(arra,-1));
//-------------------------------------------------------------------
let a="Hello v0";
console.log(a);
