export function parallax(el, speed) {
    
    let parallaxSpeed = speed / 100;
    let windowHeight = window.innerHeight;

    // calculations
    let elementRect = el.getBoundingClientRect();
    let container = el.parentElement.getBoundingClientRect();
    let midPoint = elementRect.height / 2;
    let DistanceTop = container.top;
    let translate = (DistanceTop + midPoint - (windowHeight/ 2)) * parallaxSpeed;

    el.style.translate = "0 " + translate.toFixed(2) + "px";
}