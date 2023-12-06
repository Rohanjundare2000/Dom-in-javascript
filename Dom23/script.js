{/* <h1 id="one" class="two" name="nm"></h1>
<p id="three" class="four five" name="para"></p> */}
let headone=document.querySelector('#one')
console.log(headone)
let headtwo=document.querySelector('.two')
console.log(headtwo)
let headname=document.querySelector('h1[name="nm"]')
console.log(headname)
let list =document.querySelector('li')

let listAll=document.querySelectorAll('li')
console.log(listAll)

//<p id="three" class="four five" name="para"></p> */}

let byThree = document.querySelector('#three')
console.log(byThree)
byThree.classList.add('seven')
byThree.classList.remove('four')
byThree.classList.toggle('nine')

// attribute selector
// by get and set
let bygetAttribute = byThree.getAttribute("id")
console.log(bygetAttribute)
byThree.setAttribute("id","nine")
byThree.setAttribute("data","rohan")
