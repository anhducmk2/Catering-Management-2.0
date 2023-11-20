const createBtnOder = document.querySelector('.js-add-new-oder')
const popupOder = document.querySelector('.js-popup-oder')
const closeBtnsOder = document.querySelectorAll('.js-popup-close-oder')


function showCreateOder() {
    popupOder.classList.add('open-oder')
}

function hideCreateOder() {
    popupOder.classList.remove('open-oder')
}

createBtnOder.addEventListener('click', showCreateOder)
for (const closeBtnOder of closeBtnsOder) {
    closeBtnOder.addEventListener('click', hideCreateOder)
}