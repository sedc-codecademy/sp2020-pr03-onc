window.addEventListener('scroll', function () {
    let logoImg = document.querySelector('.logo img');
    let header = document.querySelector('#head');
    let login = document.querySelector('#logB');

    if (window.pageYOffset > 10) {
        // logoImg.classList.add('logoScroll')
        header.classList.add('headerHe');
        login.classList.add('loginScroll');
    }
    else {
        // logoImg.classList.remove('logoScroll')
        header.classList.remove('headerHe');
        login.classList.remove('loginScroll');
    }
})