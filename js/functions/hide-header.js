var prevScrollpos = window.pageYOffset;
export function hideHeader(navbar) {

    var currScrollPos = window.pageYOffset;

    if (prevScrollpos > "120") {
        if (prevScrollpos > currScrollPos) {
            navbar.style.translate = "0% 0%";
        } else {
            navbar.style.translate = "0% -100%";
        }
        navbar.ontransitionend = navbar.style.background = "var(--clr-main-primary)";
    }

    if( prevScrollpos < "120") navbar.style.background = "none"
    prevScrollpos = currScrollPos;
}
