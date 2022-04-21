function greet() {
   console.log('Hello There');
}

const speak = function(name= 'Sajid' , place= 'Dhaka'){
   console.log(`Hello ${name}, Welcome to ${place}`);
};
speak();
speak("Farhan");
speak("Farhan","Ctg");


// arrow function
const fullName = (first,last) =>{
   return first+" "+last;
}
const fullname = fullName("Farhan","Sajid");
console.log(fullname);


const greet2 = () => 'Hello World';
const returnvalue = greet2();
console.log(returnvalue)

const addListOfNum = (list,text) =>{
   let res=0;
   for(let i=0;i<list.length;i++)
   {
      res=res+list[i];
   }
   return text+" "+res
}
console.log(addListOfNum([1,2,3],"Total :"))


//passing function as value to another function
const mainFunc = (callbackFunc) =>{
   let name="Sajid";
   callbackFunc(name);
}
mainFunc(name =>{
   console.log(name,"made a callback function")
})



let people = ["sajid","salim","pretty"];


people.forEach(function(person, index,fulllist){
   console.log(`${person} is in index ${index} and his friends are ${fulllist}`);
});
