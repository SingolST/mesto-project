import { settings } from "../index.js";

function showInputError(input, settings, errorMessage) {
    const spanId = `${input.id}-error`
    const errorElement = document.getElementById(spanId);
    input.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }
  
  function hideInputError(input, settings) {
    const spanId = `${input.id}-error`
    const errorElement = document.getElementById(spanId);
    input.classList.remove(settings.inputErrorClass);
    errorElement.textContent = '';
  }
  
  function checkValid(input, settings) {
    if (input.validity.valid) {
      hideInputError(input, settings);
    } else {
      showInputError(input, settings, input.validationMessage);
    }
  }
  
  export function checkFormValidity(form, buttonSubmit) {
    if (form.checkValidity()) {
      enableButton(buttonSubmit);
    } else {
      disableButton(buttonSubmit);
    }
  }
  
  function enableButton(buttonSubmit) {
    buttonSubmit.disabled = false;
  }
  
  function disableButton(buttonSubmit) {
    buttonSubmit.disabled = true;
  }
  
  function setEventListeners(form, settings) {
    const inputList = form.querySelectorAll(settings.inputSelector);
    const buttonSubmit = form.querySelector(settings.buttonSelector);
    checkFormValidity(form, buttonSubmit);
    inputList.forEach(input => {
      input.addEventListener('input', () => {
        checkValid(input, settings);
        checkFormValidity(form, buttonSubmit);
      })
    })
  }
  
function enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach(form => { setEventListeners(form, settings) })
  }

 export { enableValidation, disableButton}