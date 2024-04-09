const home = document.querySelector("#home");
const gallery = document.querySelector("#gallery");
const menu = document.querySelector("#menu");
const order = document.querySelector("#order");
const contact = document.querySelector("#contact");
const mode = document.querySelector(".mode");
const body = document.body;
const header = document.querySelector("header");
const navigationli = document.querySelectorAll(".navigation li a");
const up = document.querySelector(".up");

console.log(navigationli);

mode.onclick = function(e) {
    e.preventDefault()
    home.classList.toggle("dark");
    home.classList.toggle("text");
    body.classList.toggle("dark");
    // header.classList.toggle("dark");
    mode.classList.toggle("dark");
    gallery.classList.toggle("text");
    up.classList.toggle("text");
    // menu.classList.toggle("text");
    menu.classList.toggle("only");
    // for(let i = 0; i <navigationli.length; i++) {
    //     let item = navigationli[i];
    //     item.classList.toggle("text");
    // }
}



let typed = new Typed('.mt',{
    strings: ['Junior Frontend Developer','Graphic Designer','Content Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

