import { galleryItems } from './gallery-items.js';

// Change code below this line

//console.log(galleryItems);
//import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'; //basiclightbox

const gallery = document.querySelector('.gallery');

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
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
`;
  })
  .join('');

//console.log(galleryMurkup);
gallery.insertAdjacentHTML('afterbegin', galleryMurkup);
const dataSourceQ = "data-source=".length;
//console.log(dataSourceQ);

//instance.show();
 
gallery.addEventListener('click', basicLightboxModal);

function basicLightboxModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
  //if (!event.target.classList.contains('gallery__image')) return;
    //let originalSrc = event.target.attributes[2];
    //originalSrc= originalSrc.slice(12, originalSrc.length);
    //console.log(originalSrc);
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);
    instance.show();
}



/*
https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
*/

/*import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()*/
