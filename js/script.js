/*Fradely Code 2020*/ 

const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }
}

const handleMouseDownOnce = () => {
    document.body.classList.remove('use-is-tabbing')

    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

/* Start Button */ 
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

/* Start  Show and hidde button scroll*/ 
window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    }else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }
});

/* Start  Show and hidde button scroll*/ 


/* End Button */

/*Fradely Code 2020*/ 