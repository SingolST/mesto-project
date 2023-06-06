/*открытие и закрытие popup edit */

const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupClose = popupEdit.querySelector('.popup__close');
const popupForm = popupEdit.querySelector('.popup__form');
const popupName = popupEdit.querySelector('.popup_name');
const popupJob = popupEdit.querySelector('.popup_job');
const profile = document.querySelector('.profile__info');
const titleProfile = profile.querySelector('.profile__title');
const subtitleProfile = profile.querySelector('.profile__subtitle');

function openModal() {
  popupEdit.classList.add('popup_opened');

  popupName.value = titleProfile.innerText
  popupJob.value = subtitleProfile.innerText
}

editButton.addEventListener('click', openModal);


function closeModal() {    
  popupEdit.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closeModal);

/* отправка формы */

function handleFormSubmit(evt) {
  evt.preventDefault();

  let valueName = popupName.value;
  let valueJob = popupJob.value;
  
  titleProfile.textContent = valueName;
  subtitleProfile.textContent = valueJob;
  
  closeModal()
}

popupForm.addEventListener('submit', handleFormSubmit); 

