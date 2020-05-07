window.onscroll = function() {stickyN()};
let header = document.getElementById('sticky');
let sticky = header.offsetTop;

let stickyN = () => {

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        header.style.transition = 'all 0.3s ease 0s';
        header.style.backgroundColor = '#fafaf0';
        header.style.opacity = 0.8;
        document.querySelector('.login').style.borderColor = '#5cb85c';
        document.querySelector('.login').style.color = '#5cb85c';

    } else if (window.pageYOffset == sticky) {
        header.classList.remove('sticky');
        header.style.background = 'unset';
        header.style.transition = 'all 0.4s ease 0s';
        header.style.opacity = 1;
        document.querySelector('.login').style.borderColor = 'white';
        document.querySelector('.login').style.color = 'white';
    }
}

window.scroll(function() {stickyN});