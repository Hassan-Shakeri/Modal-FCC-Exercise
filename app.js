const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

open.addEventListener("click",()=>{
    overlay.classList.add("open-overlay")
})

close.addEventListener("click",()=>{
    overlay.classList.remove("open-overlay")
})