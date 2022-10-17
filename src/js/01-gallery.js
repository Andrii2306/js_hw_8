// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const render = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', render);
let lightbox = new SimpleLightbox('.gallery__item', {
  caption: true,
  captionSelector: 'img',
  captionPosition: 'button',
  captionData: 'alt',
  captionDelay: 250,
});
