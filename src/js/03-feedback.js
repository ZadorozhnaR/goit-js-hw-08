import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';
// let formData = JSON.parse(localStorage.getItem(localKey));

let formData = JSON.parse(localStorage.getItem(localKey)) || {};

const { email, message } = form.elements;

updateWindow();
form.addEventListener('input', throttle(saveText, 500));
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  } else {
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(localKey);
    e.currentTarget.reset();
  }
}

function saveText(e) {
  formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(localKey, JSON.stringify(formData));
}

function updateWindow() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}
