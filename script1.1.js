const container = document.querySelector(".container")
const btnRange = document.querySelector('#r1')
const rozmiar = document.querySelector('#rozmiar')


rozmiar.textContent=btnRange.value+'x'+btnRange.value
btnRange.addEventListener("input",()=>
    rozmiar.textContent=btnRange.value+'x'+btnRange.value
)

btnRange.addEventListener("input",() =>{
    createGrid(btnRange.value)})


//tworzenie grida
function createGrid(number){
totalNumber = number*number
container.innerHTML = "";
    for(let i=0; i<totalNumber;i++){
        const div = document.createElement("div")
        div.classList.add("box")
        container.appendChild(div)
let size = Math.floor(container.clientWidth / number);
div.style.width = `${size}px`;
div.style.flexGrow = "1";
        div.style.backgroundColor="rgb(255,255,255)"
        

    }
         
}
//tworzenie startowych 16x16
window.onload = () => {
    createGrid(16); // Tworzenie siatki 16x16 na start
};


let selectedMode='';
const div = document.querySelectorAll('.box')
const btnRed = document.querySelector("#btn2")
const btnDarker = document.querySelector("#btn4")
const btnRubber = document.querySelector("#btn5")
const btnClear = document.querySelector("#btn6")
let selectedColor='';

btnRed.addEventListener('click', ()=> {
    selectedColor='rgb(255,0,0)';
    selectedMode = ""
})


btnRubber.addEventListener('click',()=> {
    selectedColor='white';
    selectedMode = ""
})



//rainbow
const btnRainbow = document.querySelector("#btn3")

btnRainbow.addEventListener('click', ()=>{selectedMode="rainbow" }
)

//sciemnianie
btnDarker.addEventListener('click', ()=>{
    selectedMode='darker'
})


//kolorowanie
container.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains('box')){
        if(selectedMode=="rainbow"){
            let r = Math.floor(Math.random()*256)
            let g = Math.floor(Math.random()*256)
            let b = Math.floor(Math.random()*256)
            selectedColor=`rgb(${r},${g},${b})`
            e.target.style.backgroundColor=selectedColor
        }
        else if(selectedMode=="darker"){
            let currentOpacity=parseFloat(e.target.dataset.opacity) || 1;
            currentOpacity = parseFloat((Math.max(0, currentOpacity - 0.1)).toFixed(2));
            e.target.dataset.opacity=currentOpacity

            let currentColor = window.getComputedStyle(e.target).backgroundColor;
            console.log("Current Color:", currentColor);
            // Jeśli kolor jest w formacie "rgb(r, g, b)"
            let match = currentColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (match) {
                let r = Math.max(0, parseInt(match[1]) - 25);
                let g = Math.max(0, parseInt(match[2]) - 25);
                let b = Math.max(0, parseInt(match[3]) - 25);
                e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    }
    else{
        e.target.style.backgroundColor=selectedColor
    } }
})

//clear
btnClear.addEventListener('click',()=>{
    document.querySelectorAll('.box').forEach(box=>{
        box.style.backgroundColor="rgb(255,255,255)"
        box.dataset.opacity=1;
    })
})

