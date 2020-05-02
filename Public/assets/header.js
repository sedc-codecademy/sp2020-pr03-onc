// window.onscroll = function() {stickyN()};
// let sticky = header.offsetTop;

// let stickyN = () => {

//     if (scrollPosition > 100) {
//         header.classList.add('sticky');
//         header.style.transition = 'all 0.3s ease 0s';
//         header.style.backgroundColor = '#fafaf0';
//         header.style.opacity = 0.8;
//         document.querySelector('.login').style.borderColor = '#639ecf';
//         document.querySelector('.login').style.color = '#639ecf';

//     } else {
//         header.classList.remove('sticky');
//         header.style.background = 'unset';
//         header.style.transition = 'all 0.4s ease 0s';
//         header.style.opacity = 1;
//         document.querySelector('.login').style.borderColor = 'white';
//         document.querySelector('.login').style.color = 'white';
//     }
// }

// window.scroll(function() {stickyN});

let checkHeader = _.throttle (() => {

    let scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.getElementById('sticky').classList.add('sticky');
    }
    else 
    {
        document.getElementById('sticky').classList.remove('sticky');
    }
}, 300);

window.addEventListener('scroll', checkHeader);