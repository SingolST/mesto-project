import './styles/index.css';

import { closeModal, openModal } from './scripts/modal';
import { createCard } from './scripts/card.js';
import { enableValidation, disableButton } from './scripts/validation';
import { getUser, getCards, patchProfile, postCard, patchAvatar } from './scripts/api.js';

const editButton = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');

const avatarEdit = document.querySelector('.profile__circle');
const popupAvatarEdit = document.querySelector('#popup_avatar-edit');
const popupAvatarButtonSubmit = popupAvatarEdit.querySelector('.popup__button');
const avatarProfile = document.querySelector('.profile__avatar');
const avatarUrl = document.querySelector('#avatarUrl')

const popupEdit = document.querySelector('#popup_edit');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const popupName = popupEdit.querySelector('#nameProfile');
const popupJob = popupEdit.querySelector('#jobProfile');
const popupEditButtonSubmit = popupEdit.querySelector('.popup__button')

const profile = document.querySelector('.profile__info');
const titleProfile = profile.querySelector('.profile__title');
const subtitleProfile = profile.querySelector('.profile__subtitle');



const popupAdd = document.querySelector('#popup_add');
const buttonAdd = document.querySelector('.profile__add-button');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const formName = popupAdd.querySelector('#nameCard');
const formImageLink = popupAdd.querySelector('#linkCard');
const popupAddBtnSubmit = popupAdd.querySelector('.popup__button')

const content = document.querySelector('.content');
const cardsContent = content.querySelector('.elements');
export const popupView = document.querySelector('#popup_view');
export const elementPopupImage = popupView.querySelector('.popup__image');
export const elementPopupFigure = popupView.querySelector('.popup__figure');

let userId
let avatarUser

// // Вывод карточек и получение юзера

Promise.all([getCards(), getUser()])
  .then(([allCards, userData]) => {
    userId = userData._id;
    avatarUser = userData.avatar

    titleProfile.textContent = userData.name;
    subtitleProfile.textContent = userData.about;
    avatarProfile.src = avatarUser;

    allCards.reverse().forEach(item => {
      const newCard = createCard(item, userId);
      cardsContent.prepend(newCard);
    })
  })
  .catch((err) => {
    console.log(err);
  });

// Навешивание событий клика через массив popups

for (let i = 0; i < popups.length; i++) {
  if (popups[i].id === 'popup_edit') {
    const popupClose = popups[i].querySelector('.popup__close');
    const popupInputs = popups[i].querySelectorAll('.popup__input')
    editButton.addEventListener('click', () => {
      openModal(popups[i])
      popupInputs.forEach((element) => {
        if (element.id === 'nameProfile') {
          element.value = titleProfile.innerText;
        }
        if (element.id === 'jobProfile') {
          element.value = subtitleProfile.innerText;
        }
      })
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
  if (popups[i].id === 'popup_avatar-edit') {
    const popupClose = popups[i].querySelector('.popup__close');
    avatarEdit.addEventListener('click', () => openModal(popups[i]))

    popupClose.addEventListener('click', () => closeModal(popups[i]));
  }
}

// модальное окно редактировать аватар

function handleFormSubmitAvatarEdit(evt) {
  evt.preventDefault();

  renderLoading(true, popupAvatarButtonSubmit)

  patchAvatar(avatarUrl.value)
    .then((res) => {
      avatarUser = res.avatar
      avatarProfile.src = avatarUser;

      closeModal(popupAvatarEdit);
      popupFormAdd.reset()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false)
      popupAvatarButtonSubmit.textContent = 'Сохранить'
    })
}

popupAvatarEdit.addEventListener('submit', handleFormSubmitAvatarEdit)

/* отправка формы и отправка на сервер */
function handleFormSubmitEdit(evt) {
  evt.preventDefault();

  renderLoading(true, popupEditButtonSubmit)

  
  patchProfile(popupName.value, popupJob.value)
    .then((res) => {
      titleProfile.textContent = popupName.value;
      subtitleProfile.textContent = popupJob.value;
      closeModal(popupEdit);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false)
      popupEditButtonSubmit.textContent = 'Сохранить'
    })

}

popupFormEdit.addEventListener('submit', handleFormSubmitEdit);

/* функция рендера карточки*/
function renderCard(item) {
  cardsContent.prepend(item);
}

/* Добавление карточки */

function handleFormSubmitAdd(evt) {
  evt.preventDefault();


  const name = formName.value;
  const link = formImageLink.value
  const newElement = {
    name,
    link,
    likes: []
  }

  renderLoading(true, popupAddBtnSubmit);
  postCard(newElement)
    .then((res) => {
      renderCard(createCard(res, userId))
      disableButton(evt.submitter);
      closeModal(popupAdd);
      popupFormAdd.reset();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false)
      popupAddBtnSubmit.textContent = 'Создать'
    })
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

enableValidation(settings);

function renderLoading(isLoading, btn) {
  if (isLoading) {
    btn.textContent = 'Сохранение...'
  }
}