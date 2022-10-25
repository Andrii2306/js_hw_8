import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name = email]');
const inputMessage = document.querySelector('textarea[name = message]');
const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));

let inputFormData = parsedData || {};

if (parsedData) {
  inputMessage.value = parsedData.message || '';
  inputEmail.value = parsedData.email || '';
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

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  const userMessage = {
    email: email.value,
    message: message.value,
  };
  if (email.value === '' || message.value === '') {
    return alert('Fill in all the fields!');
  }
  // console.log(userMessage);
  event.currentTarget.reset();
  localStorage.clear();
  inputFormData = {};
});
