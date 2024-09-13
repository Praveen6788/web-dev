//  array ic collection on data
let a = [1,2,3,3,4,]
// console.log(a)
// console.log(a.length)


//  arrays are objects in javascript
a[4] = "hi"
// console.log(typeof(a))

// console.log(a.toString())


// console.log(a.join(" and "))

// console.log(a.pop())

// a.push(78)

// shift removes elements from begining 
// a.shift()
// a.unshift("praveen")


// delete a[2]  /* delete deletes the item and makes the indexed element empty */


b= [1,2,3]
c = [4,5,6]

// console.log(a.concat(b,c))
// splice removes the elements form start index to end index and we cam insert values in thier place

// console.log(a.splice(1,3,22,22,33,55))

// slice returns the values form start index excluding end index
// console.log(a.slice(1,3))

// console.log(a)




let g =[1,3,4,5,5]
 
// for(let i =0; i <g.length ;i++){
//     const h = g[i]
//     console.log(h)
// }

// g.forEach((value,index,arr) => {
//     console.log(value,index,arr)
    
// });



let obj ={
    a:1,
    b:2,
    c:3
}

// for in used to iterate through the objects

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element,key)
    }
}


// for of used for elemets in a object

// for (const element of a) {

//     console.log(element)
    
// }


 

let arr = [1,3,5,7,11];
let newarr= []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index] ** 2;
    newarr.push(element)
    
}
// console.log(newarr)

let newarr1 = arr.map((e) => {
    return (e**2)
})

console.log(newarr1)


const k = (e) => {
    if (e >2){
    return true}
    else{
        return false
    }
}

// console.log(newarr.filter(k))

// console.log(newarr)


// const t =(a,b) =>{
//     return a*b
// }

// console.log(arr.reduce(t))


// to convert anuthing into array we use Array.from 

v =Array.from("praveen")

console.log(v)