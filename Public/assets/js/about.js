//Redirect to Get Started and rewrite localStorage
(function getStartedButtons(){
    Array.from(document.querySelectorAll('.register')).forEach(element => {
        element.addEventListener('click', () => {
            localStorage.removeItem('initCounter');
            localStorage.setItem('userQA', JSON.stringify([]))
            window.location.href = './getStarted.html';
        });
    });
})();

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', function() {
        // Toggle Nav
        nav.classList.toggle('nav-active')
            // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();