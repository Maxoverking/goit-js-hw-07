import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log((galleryItems));



//============================================================================
const mainContainer = document.querySelector('.gallery');
// console.log("divGallery", mainContainer);

const cardsImageMarkup = createGalleryItems(galleryItems);
// console.log("cardsImageMarkup", cardsImageMarkup)
function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview , original , description }) => { 
       return `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`}).join('');
    
   
}

mainContainer.insertAdjacentHTML('beforeend',cardsImageMarkup);

mainContainer.addEventListener('click' , onClickMainContainer);


function onClickMainContainer(event){
    event.preventDefault();
    
// console.log(event.target);
if(!event.target.classList.contains('gallery__image')){
    return;
}
// let srcImages = event.target.src;
// console.log("🚀 srcImages",srcImages);

let dataAttrImages = event.target.dataset.source;
console.log("dataAttrImages", dataAttrImages);

createLightbox(dataAttrImages); 

};

function createLightbox(dataAttrImages) {
    const instance = basicLightbox.create(`
    <img src="${dataAttrImages}" width="800" height="600">
`)
    instance.show()
    
mainContainer.addEventListener('keydown', closeImagesByEsc)

function closeImagesByEsc (event){

    if (event.code === "Escape") {
        instance.close()   
        console.log('object');
    }
    
}
}
