let headone =document.querySelector('h1')
let inputE = document.querySelector('input')
let buttonE = document.querySelector('button')

buttonE.addEventListener('click',function(){
    let inputc = inputE.value
    headone.style.color= inputc
    inputE.value=" "
})