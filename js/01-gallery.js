import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log((galleryItems));


//============================================================================
// const mainContainer = document.querySelector('.gallery');
// // console.log("divGallery", mainContainer);
// const cardsImageMarkup = createGalleryItems(galleryItems);
// // console.log("cardsImageMarkup", cardsImageMarkup);

// mainContainer.insertAdjacentHTML('beforeend', cardsImageMarkup);

// mainContainer.addEventListener('click', onClickMainContainer);

// function onClickMainContainer(event){
//     event.preventDefault();
//     // console.log(event.currentTarget); 

// if(!event.target.classList.contains('gallery__image')){
//     return;
//   };
  
// let dataAttrImages = event.target.dataset.source;

// console.log("🚀 ~ dataAttrImages", dataAttrImages);

// const instance = basicLightbox.create(`<img src="${dataAttrImages}" width="800" height="600">`)
// instance.show()

// mainContainer.addEventListener('keydown', closeImagesByEsc);

// function closeImagesByEsc (event){
    
//     if (event.key === "Escape") {
//         instance.close(() => console.log('object'));
//         mainContainer.removeEventListener('keydown', closeImagesByEsc);
//     }   
//     }
// };

// function createGalleryItems(galleryItems) {
//     return galleryItems.map(({preview , original , description }) => { 
//        return `<div class="gallery__item">
//        <a class="gallery__link" href="${original}">
//          <img
//            class="gallery__image"
           
//            src="${preview}"
//            data-source="${original}"
//            alt="${description}"
//          />
//        </a>
//      </div>`}).join('');
    
   
// }

//=======================================================================

//без повтора esc

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);
let instance;

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener("click", onGalleryImageClick);

function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
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
function onGalleryImageClick(e) {
  e.preventDefault();
  
  if (!e.target.classList.contains('gallery__image')) {
    return; 
  };
  let galleryImages = e.target.dataset.source;
  
  instance = basicLightbox.create(`<img src="${galleryImages}" width="800" height="600">`);
  instance.show();
  
  galleryList.addEventListener("keydown", onEscKeyPress);
  console.log('Добавили Esc');
};
function onEscKeyPress(e) {
      if (e.key === "Escape") {
        instance.close(() => console.log("Убрали Esc"));
        galleryList.removeEventListener("keydown", onEscKeyPress);
      }
    }


//==================================================================
// const galleryList = document.querySelector(".gallery");
// const galleryMarkup = createGallerySmallPictureCard(galleryItems);
// let instance;
// galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryList.addEventListener("click", onGalleryImageClick);

// function createGallerySmallPictureCard(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//         </a>
//         </div>`;
//     })
//     .join("");
// }
// function onGalleryImageClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) return;
//   let galleryImages = event.target.dataset.source;
//   instance = basicLightbox.create(
//     `<img src="${galleryImages}" width="800" height="600">`,
//     {
//       onShow: () => {
//         console.log("Добавили ESC");
//         document.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose: () => {
//         console.log("Убрали ESC");
//         document.removeEventListener("keydown", onEscKeyPress);
//       },
//     }
//   );
//   instance.show();
// }
// function onEscKeyPress(event) {
//   if (event.key === "Escape") {
//     instance.close(() => {
//       console.log("Закрыли, когда нажали ESC");
//     });
//   }
// }

