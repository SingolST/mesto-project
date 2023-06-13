import './styles/index.css';

import { closeModal, openModal, closeByOverlay } from './scripts/modal';
import { createCard } from './scripts/card.js';
import { enableValidation, disableButton } from './scripts/validation';


const editButton = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');
const popupButtons = document.querySelectorAll('.popup__button')

const popupEdit = document.querySelector('#popup_edit');
const popupButtonEdit = popupEdit.querySelector('.popup__button')
const popupFormEdit = popupEdit.querySelector('.popup__form');
const popupName = popupEdit.querySelector('#nameProfile');
const popupJob = popupEdit.querySelector('#jobProfile');

const profile = document.querySelector('.profile__info');
const titleProfile = profile.querySelector('.profile__title');
const subtitleProfile = profile.querySelector('.profile__subtitle');
const popupAdd = document.querySelector('#popup_add');
const formCreate = popupAdd.querySelector('.popup__button');

const buttonAdd = document.querySelector('.profile__add-button');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const formName = popupAdd.querySelector('#nameCard');
const formImageLink = popupAdd.querySelector('#linkCard');

const content = document.querySelector('.content');
const cardsContent = content.querySelector('.elements');
export const popupView = document.querySelector('#popup_view');
export const elementPopupImage = popupView.querySelector('.popup__image');
export const elementPopupFigure = popupView.querySelector('.popup__figure');


const formInputs = document.querySelectorAll('.popup__input')

/*карточки из коробки */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Навешивание событий клика через массив popups

for (let i = 0; i < popups.length; i++) {
  if (popups[i].id === 'popup_edit') {
    const popupClose = popups[i].querySelector('.popup__close');
    editButton.addEventListener('click', () => {
      openModal(popups[i])
      closeByOverlay(popups[i])
    })

    popupClose.addEventListener('click', () => closeModal(popups[i]));
  }
  if (popups[i].id === 'popup_add') {
    const popupClose = popups[i].querySelector('.popup__close');
    buttonAdd.addEventListener('click', () => openModal(popups[i]));

    popupClose.addEventListener('click', () => closeModal(popups[i]));
  }
  if (popups[i].id === 'popup_view') {
    const popupClose = popups[i].querySelector('.popup__close');

    popupClose.addEventListener('click', () => closeModal(popups[i]));
  }
}

/*открытие и закрытие popup edit */

popupName.value = titleProfile.innerText
popupJob.value = subtitleProfile.innerText

/* отправка формы */
function handleFormSubmitEdit(evt) {
  evt.preventDefault();

  titleProfile.textContent = popupName.value;
  subtitleProfile.textContent = popupJob.value;

  popupButtonEdit.addEventListener('click', closeModal(popupEdit));
}

popupFormEdit.addEventListener('submit', handleFormSubmitEdit);

/* функция рендера карточки*/
function renderCard(item) {
  cardsContent.prepend(item);
}
/* перебор массива и создание карточек */
initialCards.reverse().forEach((currentValue) => {
  renderCard(createCard(currentValue))
});

/* Добавление карточки */

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const name = formName.value;
  const link = formImageLink.value
  const newElement = {
    name,
    link
  }

  disableButton(evt.submitter);
  renderCard(createCard(newElement));
  popupFormAdd.reset()
  formCreate.addEventListener('click', closeModal(popupAdd));
}

popupFormAdd.addEventListener('submit', handleFormSubmitAdd);

// checked valid
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  inputErrorClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__button_disabled'
}



enableValidation(settings)