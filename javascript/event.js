let button = document.getElementById("btn")
        button.addEventListener("click" ,() => {
            document.getElementById("text").innerHTML = " i am now clicked"
        })
        document.addEventListener("keydown",(e) => {
            console.log(e)
        })

        // dbclick = double click