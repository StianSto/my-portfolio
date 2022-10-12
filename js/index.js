import { parallax } from "./functions/parallax.js";
import { hideHeader } from "./functions/hide-header.js";

window.onbeforeunload = () =>  window.scrollTo(0, 0)




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
const landingPage= document.querySelector('.landing-page')
const scrollToAboutMe = document.querySelectorAll('[data-scroll-to="about-me"]')
const scrollToProjects = document.querySelectorAll('[data-scroll-to="my-projects"]')
const scrollToContact = document.querySelectorAll('[data-scroll-to="contact"]');
const aboutMe = document.querySelector(".about-me");
const myProjects = document.querySelector(".projects-section");
const contact = document.querySelector(".get-in-touch")


scrollToProjects.forEach( btn => {
    btn.onclick = () => myProjects.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
scrollToContact.forEach( btn => {
    btn.onclick = () => contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

scrollToAboutMe.forEach(btn => {
    btn.onclick = () => aboutMe.scrollIntoView({
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
    
    const years = Date.parse(today.getFullYear()) - Date.parse(birthDate.getFullYear());
    const months = Date.parse(today.getMonth()) - Date.parse(birthDate.getMonth());
    
    let beforeOrAfterBirthday;
    today.getMonth() === birthDate.getMonth() && 
    today.getDate() < birthDate.getDate() ? beforeOrAfterBirthday = -1 : beforeOrAfterBirthday = 0;

    const msToYear = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((years + months) / msToYear) + beforeOrAfterBirthday; 
}

const age = document.querySelector("#my-age");
age.innerText = calculateAge();



// show primary nav 
const navBtn = document.querySelector(".nav-btn")
const navBtnclose = document.querySelector("#close-primary-nav")
const primaryNav = document.querySelector("#primary-nav")

navBtn.addEventListener("click", () => primaryNav.style.translate = "0 0" );
navBtnclose.addEventListener("click", () => primaryNav.style.translate = "calc(100% + 60px) 0" )


/* animate job titles */
const jobTitles = document.querySelector(".work-title");

let count = 100;
function cycleThrough() {
    jobTitles.style.setProperty("--offset", - count + "%")
    count === 200 ? count = 0 : count += 100;
}

setInterval(cycleThrough, 3000)


// svg test 
import { createSvgMac } from "./functions/create-svg_mac.js";
import { createSvgPhone } from "./functions/create-svg_iphone.js";
import { projectsArr } from "./library/projects.js";
const projectsContainer = document.querySelector(".projects-container");
let phoneVector;
let macVector;

function addProjects() {
    for(let i = 0; i < projectsArr.length; i++) {
        let project = document.createElement("div");
        project.classList.add("project")

        let projectSvgMac = createSvgMac(projectsArr[i], i)
        let projectSvgPhone = createSvgPhone(projectsArr[i], i)

        project.innerHTML = `
        <div class="project--site-img">
            ${projectSvgMac}
            ${projectSvgPhone}
        </div>
        <div class="project--descrp">
            <h3>${projectsArr[i].title}</h3>
            <p>${projectsArr[i].descr}</p>
            <div class="project-buttons">
                <a href="${projectsArr[i].link}" class="btn | clr-accent-cta">Visit Site</a>
                <a href="${projectsArr[i].githubLink}" class="btn | link-project clr-a">view project</a>
            </div>
        </div> 
        `
        projectsContainer.appendChild(project)
    }
    console.log(projectsContainer)
    phoneVector = document.querySelectorAll(".iphone-vector");
    macVector = document.querySelectorAll(".mac-vector");
}
addProjects();




// createSvgMac("/assets/csm-scrn-macbook.jpg", projectImageContainers[0], 1)
// createSvgMac("/assets/project-img_rainydays-pc.jpg", projectImageContainers[1], 2)


