/* ====================== toggle style switcher ====================== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ====================== theme colors ====================== */

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    // localStorage.setItem("color", color)
    // changeColor();
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled", "true")
        }
    })
}

// function changeColor(){
//     alternateStyle.forEach((style) => {
//         if(localStorage.getItem("color") === style.getAttribute("title")){
//             style.removeAttribute("disabled")
//         }
//     })
// }