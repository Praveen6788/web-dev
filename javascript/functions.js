

function Message (name){
    console.log("hi "+name+" how are you")
}

Message("praveen")




function sum (a,b,c=3){
    // console.log(a+b)
    return a+b+c
}

let res =sum(3,4,9)

console.log(res)


// arrow function

const func1 = (x)=>{
    console.log("i am a arrow function ",x)

}

func1(878)