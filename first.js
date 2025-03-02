function brush(itne){
    console.log(`No. of Brushes are ${itne}`)
}
let kitne=5;
brush(kitne);
//Data Types let and const (var) 
let name='Gautam';
let age=19;
let isgood=true;

let skills=["HTML","CSS","JS","C++","Linux"];
let bad=null;//NULL is a object
console.log(`His name ${name} and his age ${age} with his skills`)
console.log(skills)
console.log(typeof(bad))
console.log(bad)

//Objects i.e. objects and Arrays
console.log(typeof(skills))
//Definig objects in JS for combining a data as a container
let student_profile={
name:"Gautam",
age:19,
isgood:true,
skills:["HTML","CSS","JS","C++","Linux"],

};
console.log(student_profile.name)
// The difference btw array ad object is that array only store similar type of data

//Conditionals
if(student_profile.isgood){
    console.log("Hire")
}else{
    console.log("Fire")
}
//Switch statements
let tlight="Red";
switch (tlight) {
    case "Red":
        console.log("Stop")
        break;
    case "Yellow":
        console.log("Stop")
    default:
        console.log("Challo!");
        
        break;
}

//In arr.length for telling the lengh of the array
console.log(skills.length)
//Push to add new item from end
skills.push("Python")
console.log(skills);
//Unshift (add at front)
skills.unshift("C");
console.log(skills,"   ",student_profile.skills);
//pop 
console.log(skills.pop())
console.log(skills)
//sort to sort by ascending order
skills.sort()
console.log(skills)
console.log("Hello")