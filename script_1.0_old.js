const container = document.querySelector(".container")

const btn = document.querySelector("#btn1")
btn.addEventListener("click",() =>{
    let number = parseInt(prompt("podaj ile w rzędzie"))
    totalNumber = number*number
    for(let i=0; i<totalNumber;i++){
        const div = document.createElement("div")
        div.classList.add("box")

        div.dataset.redValue=255
        
        div.addEventListener("mouseenter", () => {
            let redValue = parseInt(div.dataset.redValue)
            redValue= redValue>0? redValue-25:0;
            
            div.dataset.redValue=redValue
            div.style.backgroundColor = `rgb(${redValue},0,0)`
        })
        container.appendChild(div)
        div.setAttribute("style", `width:${100/number}%; height: ${container.clientWidth/number}px`)
    }

})






