let sideNav = document.querySelector(".side-navbar")
let navMenuToggle = document.querySelector(".navbar-menu-toggle")
let xMarkToggle = document.querySelector(".xmark")


navMenuToggle.addEventListener("click" , function(){
    sideNav.style.left="0"
})

xMarkToggle.addEventListener("click" , function(){
    sideNav.style.left="-60%"
})