let headone = document.querySelector('h1')
console.log(headone)
let bdy = document.querySelector('body')
console.log(bdy)
bdy.addEventListener('click',function(event){
    console.log(event.target.className)
})