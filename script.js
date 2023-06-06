const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const popupClose = document.querySelectorAll('.popup__close');

function openModal() {
    popup.classList.add('popup_opened')
}

editButton.addEventListener('click', openModal)


function closeModal() {    
    popup.classList.remove('popup_opened')
}

popupClose[0].addEventListener('click', closeModal)

