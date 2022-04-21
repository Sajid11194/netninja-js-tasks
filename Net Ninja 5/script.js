let student = {
   name: "Sajid",
   age : 21,
   cgpa : 4.5
}
const time="age"
console.log(student.name)
console.log(student[time]) // .time will not show results
console.log(student["cgpa"])
console.log(student)
console.log(typeof student)

//using function inside object
let user = {
   name: "Sajid",
   age : 21,
   hobby : ["gaming","programming"],
   login : ()=> "Successfully Logged in",
   logout : function(){
      return `${this.name} is logged out`
   },
   showhobby : function(){
      this.hobby.forEach(val=>{
         console.log(val);
      })
   }
}
console.log(user.login())
console.log(user.logout())
user.showhobby()

//array of obj
const objs=[
   { name : "Sajid",age: 21},{ name : "Pretty",age: 20}
]
console.log(objs[0].name)
let user2 = {
   name: "Sajid",
   age : 21,
   hobby : objs,
   login : ()=> "Successfully Logged in",
   logout : function(){
      return `${this.name} is logged out`
   },
   showhobby : function(){
      this.hobby.forEach(val=>{
         console.log(val.name);
         console.log(val.age);
      })
   }
}
user2.showhobby()

//math

console.log(Math)
console.log(Math.PI)
let num=5.1;
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.trunc(num))
