let e1=document.querySelector('h1')
console.log(e1)
let e2=document.querySelector('#one')
console.log(e2)
let e3=document.querySelector('.two')
console.log(e3)
let e4=document.querySelector('h4[name ="nm"]')
console.log(e4)

document.querySelector('h1').addEventListener("click",function(){
    document.querySelector('h1').textContent= document.querySelector('h1').textContent.toUpperCase()
})
