// Імпортуємо бібліотеку та стилі для неї
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Отримуємо посилання на елемент галереї
const galleryRef = document.querySelector('.gallery');

// Генеруємо розмітку для кожного елемента галереї
const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

// Додаємо згенеровану розмітку в елемент  галереї
galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Ініціалізація модального вікна для галереї за допомогою бібліотеки
const modal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

//  Функція, яка генерує розмітку для кожного елемента галереї
function makeGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}" />
        </a> `;
    })
    .join('');
}