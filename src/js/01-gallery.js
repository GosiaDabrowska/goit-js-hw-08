import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(image) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`
} 

const galleryString = galleryItems.map(createGalleryItem).join("")

galleryContainer.insertAdjacentHTML("afterbegin", galleryString);


galleryContainer.addEventListener("click", (ev) => {
    ev.preventDefault();
    const lgImg = ev.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${lgImg}" width="800" height="600">
`)

instance.show()   

const closeLightboxOnEscape = (ev) => {
  if(ev.key === 'Escape') {
    instance.close();
    document.removeEventListener("keydown", closeLightboxOnEscape)
  }
}
document.addEventListener("keydown", closeLightboxOnEscape)
});