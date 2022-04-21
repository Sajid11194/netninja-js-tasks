const select=document.querySelectorAll('p');
select.forEach((x) => {
    console.log(x)
})

const idfind=document.getElementById('idtest')
console.log(idfind)

const error = document.getElementsByClassName('error')
console.log(error[0])

const getp=document.getElementsByTagName('p')
console.log(getp[0])

const write=document.querySelectorAll('.error');
select.forEach((x) => {
    x.innerText="Changed Error Texts"
})

const writehtml=document.querySelectorAll('.error');
writehtml.forEach((x) => {
x.innerHTML="<h1>Changed to header</h1>"
})

const writediv=document.querySelector('.content');
console.log(writediv)

const items=["item1","item2","item3"];
items.forEach((x) =>{
    writediv.innerHTML+=`<p>${x} is ${x} 5</p>`
    console.log(writediv)
})


const link=document.querySelector('a');
console.log(link.getAttribute('href'))
link.setAttribute("href","http://google.com")
link.setAttribute("style","color:green;background:black")
link.style.background="black"

const classes=document.querySelector('p')
console.log(classes.classList)

classes.classList.add('error')
classes.classList.remove('error')
classes.classList.add('success')

const test=document.querySelectorAll('p')
test.forEach((item)=>{
    if(item.innerText.search("success")!=-1)
    {
        item.classList.add("success")
    }
    else if(item.innerText.search("error")!=-1)
    {
        item.classList.add("error")
    }
})