const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")
const btn_menu = document.querySelector(".btn-header")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
    btn_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
    btn_menu.classList.remove("active");
}))
var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#000', '#000', '#000', '#000'],
    slidesNavigation: true,
    css3: true,
    scrollingSpeed: 1500,

});
$(document).on('click', '#moveUp', function(){
    fullpage_api.moveSectionUp();
});
$(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
});