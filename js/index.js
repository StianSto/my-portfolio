import { parallax } from "./functions/parallax.js";
import { hideHeader } from "./functions/hide-header.js";

const phoneVector = document.querySelectorAll(".iphone-vector");
const macVector = document.querySelectorAll(".mac-vector");

window.addEventListener('scroll', () =>  {

    phoneVector.forEach( el => parallax(el, 12));
    macVector.forEach( el => parallax(el, 4));

    const navbar = document.querySelector("header");
    hideHeader(navbar);
});




// show text under skill logos 

const skillLogos = document.querySelectorAll("[data-skill-logo]")

skillLogos.forEach( logo => logo.addEventListener("mouseover", () => { logo.classList.add("show-skill-text") }))
skillLogos.forEach( logo => logo.addEventListener("mouseleave", () => { logo.classList.remove("show-skill-text") }))


/* scroll to */
const myProjects = document.querySelector(".projects-section");
const scrollToProjects = document.querySelector('[data-scroll-to="my-projects"]')
const scrollToContact = document.querySelectorAll('[data-scroll-to="contact"]');
const contact = document.querySelector(".get-in-touch")

scrollToProjects.onclick = () => myProjects.scrollIntoView({
    behavior: "smooth",
    block: "start"
})

scrollToContact.forEach( btn => {
    btn.onclick = () => contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})


/* click to copy */
const email = document.querySelector(".contact-info--email");
const phone = document.querySelector(".contact-info--phone");
email.onclick = clickToCopy;
phone.onclick = clickToCopy;

function clickToCopy() {
    navigator.clipboard.writeText(this.textContent)
    this.classList.add("copied");
    setTimeout(() => this.classList.remove("copied"), 5000)
}

// age



function calculateAge() {

    const birthDate = new Date("1995, 06, 23");
    const today = new Date();

    const years = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth()) return years - 1;
    if (today.getMonth() === birthDate.getMonth() && 
        today.getDate() < birthDate.getDate()) return years - 1;

    return years;
}

const age = document.querySelector("#my-age");
age.innerText = calculateAge();