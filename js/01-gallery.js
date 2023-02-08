import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'; //basiclightbox

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesMurkup = galleryItems.map((
    { 
        preview,
        original,
        description
    }
) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </div>
`; }).join("");

console.log(imagesMurkup);
gallery.insertAdjacentHTML("afterbegin", imagesMurkup);


/*
https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
*/

/*import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()*/

