// Open the modal
document.querySelector('#logB').addEventListener('click', () => {
    document.querySelector('.popUpLogin').style.display = 'flex';
    document.querySelector('.popUpLogin').style.position = 'fixed';
    document.querySelector('.popUpLogin').style.zIndex = '50';
})


// Close the modal
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popUpLogin').style.display = 'none';
})


