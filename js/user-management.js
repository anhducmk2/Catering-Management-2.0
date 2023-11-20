const createBtn = document.querySelector('.js-add-user')
const popup = document.querySelector('.js-popup')
const closeBtns = document.querySelectorAll('.js-popup-close')


function showCreateUser() {
    popup.classList.add('open')
}

function hideCreateUser() {
    popup.classList.remove('open')
}

createBtn.addEventListener('click', showCreateUser)
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', hideCreateUser)
}

// delete user 

const deleteBtn = document.querySelector('.js-delete-user')
const popupDelete = document.querySelector('.delete-js-popup')
const closeDeleteBtns = document.querySelectorAll('.js-popup-delete-close')

function showDeleteUser() {
    popupDelete.classList.add('delete')
}

function hideDeleteUser() {
    popupDelete.classList.remove('delete')
}

deleteBtn.addEventListener('click', showDeleteUser)
for (const closeDeleteBtn of closeDeleteBtns) {
    closeDeleteBtn.addEventListener('click', hideDeleteUser)
}
