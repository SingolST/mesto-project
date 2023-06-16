import { popupView, elementPopupImage, elementPopupFigure } from '../index.js'
import { openModal } from './modal';
import { deleteCard, putLike, delLike } from './api.js';

function createCard(elementObj, userId) {
  const elementTemplate = document.querySelector('#element').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  const elementLike = element.querySelector('.element__like');
  const elementCounterLikes = element.querySelector('.element_like-span')
  const elementDelete = element.querySelector('.element__btn-delete');
  let elementLikesArray = elementObj.likes

  //Наполнение контента
  elementImage.setAttribute('src', elementObj.link);
  elementImage.setAttribute('alt', elementObj.name);
  elementTitle.textContent = elementObj.name;
  updateLike(elementLikesArray)
  
  // Проверка лайка
  function isLiked(likesArray) {
    return likesArray.some(item => item._id === userId)
  }
  //Обновление лайка
  function updateLike (likesArray) {
    elementLikesArray = likesArray
    elementLike.classList.toggle('element__like_active', isLiked(likesArray))
    elementCounterLikes.textContent = elementLikesArray.length;
  }

  // Нажатие лайка
  elementLike.addEventListener('click', function (evt) {
      const queryMetod = isLiked(elementLikesArray) ? delLike(elementObj._id) : putLike(elementObj._id);
      queryMetod
      .then(res => {
        updateLike(res.likes);
      })
      .catch(err => console.log(err))
  })

  //наполнение для просмотра изображения
  elementImage.addEventListener('click', function () {
    openModal(popupView)
    elementPopupImage.setAttribute('src', elementImage.getAttribute('src'));
    elementPopupImage.setAttribute('alt', elementImage.getAttribute('alt'));
    elementPopupFigure.textContent = elementTitle.textContent;
  })
  //проверка id
  if (elementObj.owner._id === userId) {
    // Удаление карточки
    elementDelete.addEventListener('click', function () {
      deleteCard(elementObj._id)
        .then((res) => {
          element.remove(res);
        })
        .catch(err => console.log(err))
    })
  } else {
    elementDelete.remove()
  }

  return element;
}

export { createCard }