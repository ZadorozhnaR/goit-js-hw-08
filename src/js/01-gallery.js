// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const addPhotos = galleryItems
  .map(
    photo => `<li class="gallery__item">
  <a class="gallery__link" href="${photo.original}">
    <img
      class="gallery__image"
      src="${photo.preview}"
      data-source="${photo.original}"
      alt="${photo.description}"
    />
  </a>
</li>`
  )
  .join(' ');

galleryList.insertAdjacentHTML('beforeend', addPhotos);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
