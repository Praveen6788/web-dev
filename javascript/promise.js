console.log("this is Promises");

let prom1 = new Promise((resolve,reject) => {
    let a =Math.random()
    if (a > 0.5){
        reject("No random supports 1")
    }
    else{
        setTimeout (()=>{
            console.log("yes i am done 1")
            resolve("harrry1")
        },3000);
    }
    

})

let prom2 = new Promise((resolve,reject) => {
    let a =Math.random()
    if (a > 0.5){
        reject("No random supports 2")
    }
    else{
        setTimeout (()=>{
            console.log("yes i am done 2")
            resolve("harrry2")
        },1000);
    }
    

})

// prom1.then((b)=>{
//     console.log(b)
// }
// ).catch((err) => {
//     console.log(err)
// })

// p
let p3 = Promise.all([prom1,prom2])

p3.then((a)=>{
    console.log(a)

}).catch((err)=>{
    console.log(err)
})

