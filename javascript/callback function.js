// asynchronius functions which  
// console.log("i am a hacker")

// let a = setTimeout (()=>{
//     console.log("iam inside")
// },2000)

// console.log("the end")


const fn = () =>{
    console.log("nothing")
}

const callback =(arg,fn) =>{
    console.log(arg)
    fn()
}




const loadscript = (src,callback) => {
    let sc = document.createElement("script");
        sc.src=src;
        sc.onload = callback("praveen",fn)
        document.head.append(sc)

    
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)


// solution to callback hell is promises