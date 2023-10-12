import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imagesList = document.querySelector(".gallery"); // ref for ul

//* task 1. Разметка
function createImagesListMarkup(images){
    const markup = images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a>
        </li>`
    }).join("");

    return markup;
   }

imagesList.insertAdjacentHTML("beforeend", createImagesListMarkup(galleryItems));
