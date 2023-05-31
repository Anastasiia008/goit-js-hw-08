// Робимо імпорт для контролю частоти виклику функції
import throttle from 'lodash.throttle';

// Отримуємо посилання на елемент
const formRef = document.querySelector('.feedback-form');

// Створюємо ключ для зберігання даних локально
const STORAGE_KEY = 'feedback-form-state';

// Створюэмо вар для зберігання даних форми
let formData = {};

populateForm();

// Додаємо слухача подій
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

// Функція для оновлення значень і зберігання їх локально
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Функція для отримання локальних даних для заповненя форми
function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (!savedData) {
        return;
    }
    
    const parsedData = JSON.parse(savedData);
    Object.entries(parsedData).forEach(([name, value]) => {
    formData[name] = value;
    formRef.elements[name].value = value;
});
}

// Функція для виведення форми та видалення даних локального сховмща
function onSubmit(evt) {
    evt.preventDefault();
    
    if (!evt.target.email.value || !evt.target.message.value) {
        window.alert('All fields should be completed');
        return;
    }
    
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}
