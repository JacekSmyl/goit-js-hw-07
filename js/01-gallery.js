import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onGalleryItemClick);

// Create dynamic layout
function createMarkupGallery(array) {
  return array
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
            </div>`;
    })
    .join("");
}
function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryItemEl = event.target.classList.contains("gallery__image");
  if (!isGalleryItemEl) {
    return;
  }

  const galleryImage = event.target;
  const galleryImageUrlBig = galleryImage.dataset.source;

  onBasicLightbox(galleryImageUrlBig);
}

