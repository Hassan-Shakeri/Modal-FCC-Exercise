const open = document.querySelector(".open-btn");
const overlay = document.querySelector(".overlay");

open.addEventListener("click",()=>{
    overlay.classList.add("open-overlay")
})

window.addEventListener("keydown", e =>{
    if (e.key == "Escape"){
    overlay.classList.remove("open-overlay")
}
})