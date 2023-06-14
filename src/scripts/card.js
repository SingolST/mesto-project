import { popupView, elementPopupImage, elementPopupFigure } from '../index.js'
import { openModal } from './modal';

function createCard(elementObj) {
    const elementTemplate = document.querySelector('#element').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const elementLike = element.querySelector('.element__like');
    const elementDelete = element.querySelector('.element__btn-delete');
  
    //Наполнение контента
    elementImage.setAttribute('src', elementObj.link);
    elementImage.setAttribute('alt', elementObj.name);
    elementTitle.textContent = elementObj.name;
  
    // Удаление карточки
    elementDelete.addEventListener('click', function() {
      element.remove();
    })
    // Нажатие лайка
    elementLike.addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active')
    })
  
    //наполнение для просмотра изображения
    elementImage.addEventListener('click', function () {
      openModal(popupView)
      elementPopupImage.setAttribute('src', elementImage.getAttribute('src'));
      elementPopupImage.setAttribute('alt', elementImage.getAttribute('alt'));
      elementPopupFigure.textContent = elementTitle.textContent;
    })
  
    return element;
  }

export { createCard }