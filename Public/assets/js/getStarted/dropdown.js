let arrow = document.querySelector(".arrow");
let arrowDown = true;

// Change arrow pointing
let changeArrow = () => {
   if (arrowDown) {
        arrow.style.borderWidth =  "2.5px 0 0 2.5px"
   } else if ( ! arrowDown){
        arrow.style.borderWidth =  "0 2.5px 2.5px 0"
   }
}

// Dropdown element
let drop = true
document.querySelector(".dropdown-element").addEventListener('click', () => {
    drop ? document.querySelector('.dropdown-content').style.display = "block"
        : document.querySelector('.dropdown-content').style.display = "none";
    drop ? drop = false : drop = true;
    if (arrowDown) {
        changeArrow();
        arrowDown = false;
    } else {
        changeArrow();
        arrowDown = true;
    }
});
