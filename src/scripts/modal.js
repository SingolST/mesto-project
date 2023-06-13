/* https://qna.habr.com/q/240670 */

function openModal(modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
    closeByOverlay(modal)
  }
  
function closeModal(modal) {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
  }

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closeModal(openedPopup);
    }
}
function closeByOverlay(popup) {
  if (popup.classList.contains('popup_opened')) {
    popup.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        closeModal(popup);
      }
    })
  } else {
    popup.removeEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        closeModal(popup);
      }
    })
  }
  }


export { openModal, closeModal, closeByOverlay } 