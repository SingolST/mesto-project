const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup_edit');
const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupForm = popupEdit.querySelector('.popup__form');
const popupName = popupEdit.querySelector('.popup_name');
const popupJob = popupEdit.querySelector('.popup_job');
const profile = document.querySelector('.profile__info');
const titleProfile = profile.querySelector('.profile__title');
const subtitleProfile = profile.querySelector('.profile__subtitle');
const popupAdd = document.querySelector('#popup_add');
const formCreate = popupAdd.querySelector('.popup__button');
const popupCloseAdd = popupAdd.querySelector('.popup__close');
const buttonAdd = document.querySelector('.profile__add-button');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const formName =  popupAdd.querySelector('.popup__input_name');
const formImageLink =  popupAdd.querySelector('.popup__input_image-link');
const content = document.querySelector('.content');
const cardsContent = content.querySelector('.elements');
const buttonLike = content.querySelectorAll('.element__like_active');
const popupView = document.querySelector('.popup_view');
const elementPopupImage = popupView.querySelector('.popup__image');
const elementPopupFigure = popupView.querySelector('.popup__figure');
const popupCloseView = popupView.querySelector('.popup__close')

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

/*открытие и закрытие popup edit */
function openModalEdit() {
  popupEdit.classList.add('popup_opened');
  popupEdit.classList.remove('popup_hidden')
}

editButton.addEventListener('click', openModalEdit);


function closeModalEdit() {    
  popupEdit.classList.add('popup_hidden')
  popupEdit.classList.remove('popup_opened');
}

popupCloseEdit.addEventListener('click', closeModalEdit);

popupName.value = titleProfile.innerText
popupJob.value = subtitleProfile.innerText

/* отправка формы */

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  
  titleProfile.textContent = popupName.value;
  subtitleProfile.textContent = popupJob.value;
  
  closeModalEdit()
}

popupForm.addEventListener('submit', handleFormSubmitEdit); 



/*открытие просмотра изображения */
function openModalView() {
  popupView.classList.remove('popup_hidden')
  popupView.classList.add('popup_opened');
}

function closeModalView() {
  popupView.classList.remove('popup_opened');
  popupView.classList.add('popup_hidden')
}

popupCloseView.addEventListener('click', closeModalView)

function createCard(elementObj) {
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  const elementLike = element.querySelector('.element__like');
  const elementDelete = element.querySelector('.element__btn-delete');

  elementImage.setAttribute('src', elementObj.link);
  elementImage.setAttribute('alt', elementObj.name);
  elementTitle.textContent = elementObj.name;

  cardsContent.prepend(element);

  // Удаление карточки
  elementDelete.addEventListener('click', function() {
    element.remove();
  })
  // Нажатие лайка
  elementLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active')
  })

  elementImage.addEventListener('click', function () {
    elementPopupImage.setAttribute('src', elementImage.getAttribute('src'));
    elementPopupImage.setAttribute('alt', elementImage.getAttribute('alt'));
    elementPopupFigure.textContent = elementTitle.textContent;

    openModalView()
  })
}

initialCards.forEach((currentValue) => {
createCard(currentValue)
});


/*открытие закрытие popup add */

function openModalAdd() {
  popupAdd.classList.add('popup_opened');
}

buttonAdd.addEventListener('click', openModalAdd)

function closeModalAdd() {
  popupAdd.classList.remove('popup_opened');
}

popupCloseAdd.addEventListener('click', closeModalAdd)

/*Добавление карточки */

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  initialCards.unshift({
    'name' : formName.value,
    'link' : formImageLink.value
  },[])
  
  createCard(initialCards[0])
  closeModalAdd();
}

popupFormAdd.addEventListener('submit', handleFormSubmitAdd); 

