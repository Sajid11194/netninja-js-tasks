for(let i=0;i<20;i++)
{
   console.log(i)
}


let i=100
while(i<120)
{
   console.log(i);
   i++;
}


i=999
do{
   console.log(i)
}
while(i<10) //execute the loop atleast one time, then check condition

pass="s@jid"
if(pass.length>4 && pass.includes('@'))
{
   console.log(`${pass} is an acceptable password`)
}
else if(!pass.includes('@')) // if @ is not found in pass
{
   console.log(`${pass} is an acceptable password,please insert @ symbol`)
}
else
{
   console.log(`${pass} is not an acceptable password`)
}

//continue break example
for(let i=0;i<20;i++)
{
   if(i==5)
   {
      continue; //skip to next loop when i==5
   }
   if(i==10)
   {
      break; //stop loop if i==10
   }
   console.log(i)
}

//switch example
choice=1
switch(choice)
{
   case 0:
      console.log("0 Found")
      break;
   case 1:
      console.log("1 Found")
      break;
   case 2:
      console.log("2 Found")
      break;
   default:
      console.log("Default Executed")
}

let name="Sajid";
if(true)
{
   let name="Farhan"
   // name="Farhan" will change the global value
   console.log("1st if : "+name)
   if(true)
   {
      name="XD" // changes the name of both if statements,but not change global name
      console.log("2nd if : "+name)
   }
   console.log("1st if : "+name)
}
console.log(name)