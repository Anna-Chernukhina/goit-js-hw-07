import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector(".gallery"); // ref for ul

//* task 1. Разметка
const imagesListMarkup = createImagesListMarkup(galleryItems); // creating markup for images li

function createImagesListMarkup(images){
    const markup = images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");

 console.log(markup);
    return markup;
   
}

imagesList.insertAdjacentHTML("beforeend", imagesListMarkup);

//* task 2. Реализация делегирования на ul.gallery и получение url большого изображения.
//реализуем делегирование. Нажатие на img, слушаем событие на ul
imagesList.addEventListener("click", openModal);


//* task 4. Открытие модального окна по клику на элементе галереи.
function openModal(event) {
    event.preventDefault();
    let bigUrl;

    if (event.target.nodeName === "IMG") {
        bigUrl = event.target.dataset.source; // получение url большого изображения

        // Открытие модального окна по клику на элементе галереи 
        const instance = basicLightbox.create(`
        <img src="${bigUrl}" width="800" height="600">`);
        instance.show();

        imagesList.addEventListener("keydown", function closeByEsc(event) {
            if (event.key === "Escape") {
                instance.close();
                imagesList.removeEventListener("keydown", closeByEsc);
            }
        });
    }

    else { return; }
}



