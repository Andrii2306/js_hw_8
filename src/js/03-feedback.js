import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name = email]');
const inputMessage = document.querySelector('textarea[name = message]');
const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
const inputFormData = parsedData || {};
if (!parsedData) {
  inputEmail.value = '';
  inputMessage.value = '';
} else {
  inputMessage.value = parsedData.message;
  inputEmail.value = parsedData.email;
}
inputEmail.addEventListener('input', addData);
inputMessage.addEventListener('input', addData);
function addData(event) {
  inputFormData[event.target.name] = event.target.value;
  saveInLocalStorage();
}
const saveInLocalStorage = throttle(function () {
  localStorage.setItem('feedback-form-state', JSON.stringify(inputFormData));
}, 500);
