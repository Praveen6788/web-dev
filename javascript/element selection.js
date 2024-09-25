// acessing elements by class names

let a =document.getElementsByClassName("box")
console.log(a[4].innerHTML)

a[2].style.backgroundColor = "red"
// a[].style.backgroundColor = "red"


// acessing elements by  ids 
// let b  = document.getElementById("box_1")

// b.style.backgroundColor = "yellow"

// qurieselector selcts only first elament having given class

document.querySelector(".box").style.backgroundColor = "green"

// quirie selctor all selects all elenebts having the class name but it returns the nodelist

// document.querySelectorAll(".box").forEach( e =>{
//     e.style.backgroundColor ="green"
// })


// selects by tagname

let c = document.getElementsByTagName("div")
c[2].matches("box_2").style.backgroundColor ="red"


// closes use for having closet css