
import { galleryItems } from './gallery-items.js';
// Change code below this line
const parent = document.querySelector(".gallery");

for (const image of galleryItems) {
    let img = document.createElement("img");
    parent.append(img);
    img.insertAdjacentHTML("beforeend", img.src = image.preview, img.alt = image.description, img.width = "360", img.height = "240");
    img.classList.add("gallery__item","gallery__image", "gallery__link");
}

const makeBiggerImage = (event) => {
 if (event.target.nodeName !== "IMG") {
     return;
 } else {

 }


};
parent.addEventListener("click", makeBiggerImage);



