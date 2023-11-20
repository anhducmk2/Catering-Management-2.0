const createBtnFood = document.querySelector('.js-add-new-food')
const popupFood = document.querySelector('.js-popup-food')
const closeBtnsFood = document.querySelectorAll('.js-popup-close-food')


function showCreateFood() {
    popupFood.classList.add('open-food')
}

function hideCreateFood() {
    popupFood.classList.remove('open-food')
}

createBtnFood.addEventListener('click', showCreateFood)
for (const closeBtnFood of closeBtnsFood) {
    closeBtnFood.addEventListener('click', hideCreateFood)
}