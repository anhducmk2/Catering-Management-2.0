const createBtnIngredients = document.querySelector('.js-add-new-ingredients')
const popupStorage = document.querySelector('.js-popup-storage')
const closeBtnsIngredients = document.querySelectorAll('.js-popup-close-storage')


function showCreateIngredients() {
    popupStorage.classList.add('open-storage')
}

function hideCreateIngredients() {
    popupStorage.classList.remove('open-storage')
}

createBtnIngredients.addEventListener('click', showCreateIngredients)
for (const closeBtnIngredients of closeBtnsIngredients) {
    closeBtnIngredients.addEventListener('click', hideCreateIngredients)
}