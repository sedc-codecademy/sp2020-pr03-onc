
// Dropdown element
let drop = true
document.querySelector(".dropdown-element").addEventListener('click', () => {
    drop ? document.querySelector('.dropdown-content').style.display = "block"
        : document.querySelector('.dropdown-content').style.display = "none";
    drop ? drop = false : drop = true;
});
