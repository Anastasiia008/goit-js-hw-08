// Робимо імпорт для контролю частоти виклику функції
import throttle from 'lodash.throttle';

// Робимо імпорт для роботи та контролю плеєра
import Player from '@vimeo/player';

// Отримуємо посилання на елемент
const iframe = document.querySelector('iframe');

// Створюємо екземпляр преєра
const player = new Player(iframe);

// Створюємо ключ для зберігання поточного часу локально
const STORAGE_KEY = 'videoplayer-current-time';

// Фіксуємо відпрацювання події
player.on('timeupdate', throttle(onTimeUpdate, 1000));

// Ввімкнення з часу, яке зберігли
playOnCurrentTime();

// Фунція, для запам'ятовування ті зберігання часу відео
function onTimeUpdate(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
}

// Фунція, для відтворення відео зі збереженого часу
function playOnCurrentTime() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
    player.setCurrentTime(savedData);
}
}
