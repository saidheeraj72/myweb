let nav=document.querySelector(".navbar");
window.onscroll=function(){
    document.documentElement.scrollTop>20 ? nav.classList.add("header-scrolled") : nav.classList.remove("header-scrolled");
}
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
