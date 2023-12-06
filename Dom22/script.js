// {/* <h1 id="one" class="two ">hello</h1>
// <ul>
//     <li fruit="fruit">Apple</li>
//     <li fruit="fruit">Apple</li>
//     <li fruit="fruit">Apple</li>
//     <li fruit="fruit">Apple</li>
// </ul>
// <p id="three" class="four five" name="nm">para</p>
// <button>Add Element</button>
// <script>script.js</script>
// </body> */}
let headone =document.querySelector('h1')
let byclass =document.querySelector('.two')
let byid =document.querySelector('#one')
let name1 =document.querySelector('h1[name="nm"]')
let bytagname =document.querySelector('li')

// {/* <p id="three" class="four five" name="nm">para</p> */}
let byThree = document.querySelector('#three')
console.log(byThree)//element
byThree.classList.add('six')
byThree.classList.remove('five')
byThree.classList.toggle('four')

byThree.classList.toggle('four')

let getAttValue = byThree.getAttribute('id')
console.log(getAttValue)
byThree.setAttribute("id","nine")
byThree.setAttribute('datacy',"eleone")