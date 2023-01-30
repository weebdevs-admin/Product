let elHamburg = document.querySelector('.hamburg')
let elExit = document.querySelector('.cancel')
let mobileMenu = document.querySelector('.mobile__menu')
let Body = document.querySelector('body')
let LightBtn = document.querySelector('.navbar__list-light')
let lightEffect = document.querySelectorAll('.light__effect')

elHamburg.addEventListener('click',(e)=>{
    mobileMenu.style.display = 'block'
})
elExit.addEventListener('click',(e)=>{
    mobileMenu.style.display = 'none'
})

LightBtn.addEventListener('click',(e)=>{
    
    Body.classList.toggle('light__btn')
})