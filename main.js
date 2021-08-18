const mainButton = document.getElementById('main')
const parent = document.querySelector('.buttons')
const optionButtons = parent.querySelectorAll('button')

for(let i = 0; i<optionButtons.length; i++){
    optionButtons[i].innerHTML = i + 1
}

mainButton.addEventListener('click', ()=>{
    parent.classList.toggle('active')
})

optionButtons.forEach(i=>{
    i.addEventListener('click', ()=>{
        mainButton.innerHTML = i.innerHTML
        parent.classList.toggle('active')
    })
})