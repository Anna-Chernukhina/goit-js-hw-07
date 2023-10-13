import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector(".gallery"); // ref for ul

//* task 1. Створення і рендер розмітки
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

//* task 3. Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery
let gallery  = new SimpleLightbox('.gallery__item a', {
    captionsData: "alt",
    captionDelay: 250
});
 