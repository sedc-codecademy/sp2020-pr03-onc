window.addEventListener('scroll', function () {
    let logoImg = document.querySelector('.logo h1 a');
    let header = document.querySelector('#head');
    let login = document.querySelector('#logB');

    if (window.pageYOffset > 10) {
        logoImg.innerHTML = `<h2>Mindify</h2>`;
        header.classList.add('headerHe');
        login.classList.add('loginScroll');
    }
    else {
        logoImg.innerHTML = `<h1>Mindify</h1>`;
        header.classList.remove('headerHe');
        login.classList.remove('loginScroll');
    }
})

