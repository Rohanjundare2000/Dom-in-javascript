let fristE = document.querySelector('.fe')
let backE = document.querySelector('.be')
let headone = document.querySelector('h1')

let allElementFE = document.querySelectorAll('.fe')
console.log(allElementFE)

let allElementBE = document.querySelectorAll('.be')
console.log(allElementBE)

headone.addEventListener('click',function(){
    for(let i=0; i<allElementFE.length;i++)
    {
        allElementFE[i].style.color = "red"
        allElementBE[i].style.color = "green"
    }
})
let allLiElements = document.querySelectorAll('li')
console.log(allLiElements)// nodelist

let allElements2= document.getElementsByTagName('li')
console.log(allElements2)

let byid = document.querySelector("#one")
let byid2 =document.getElementById('one')
console.log(byid2)

let feE1 =document.querySelector(".fe")
let feE2 =document.getElementByClassName('fe')
console.log(feE2)

let nodelist = document.querySelectorAll("li[name='backE]")
let nodelist2 =document.getElementsByName("backE")
console.log(nodelist)
console.log(nodelist2)
