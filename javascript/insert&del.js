const a  = document.querySelector(".box").innerHTML
console.log(a)

let b  = document.querySelector(".box").innerText
console.log(b)


let c  = document.querySelector(".box").outerHTML
console.log("this is c "+c)

let d  = document.querySelector(".box").tagName
console.log("this is d "+d)

let e = document.querySelector(".container").textContent
console.log(e)

document.querySelector(".box").innerText = "hi code with harry"

 let f =document.querySelector(".box").getAttribute("style")
console.log(f)

// we have functions like hasattribute getattribute setattribute and removeattribute to add and remove attribute





// to know remove or add class to elements
document.querySelector(".container").classList.add("praveen")


// let g = document.querySelector(".container").classList
// console.log(g)

document.querySelector(".container").classList.remove("praveen")


let p  =document.querySelector(".container").className
console.log(p)


// toggle helps to apply or de aplly css class to elements

document.querySelector(".container").toggleAttribute("red")