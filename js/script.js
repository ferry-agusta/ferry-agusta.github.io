// Feather Icon
feather.replace();

// Modal-Generik
const modal = document.querySelector("[data-modal]")
const openModal = document.querySelector("[open-modal]")
openModal.addEventListener("click", () => { modal.showModal() })
modal.addEventListener("click", e => {
  const dialogDimensions = modal.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close()
  }
})

// Modal-Kategori-Top
const modalKategoriTop = document.querySelector("[data-modal-kategori-top]")
const openModalKategoriTop = document.querySelector("[open-modal-kategori-top]")
openModalKategoriTop.addEventListener("click", () => { modalKategoriTop.showModal() })
modalKategoriTop.addEventListener("click", e => {
  const dialogDimensions = modalKategoriTop.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalKategoriTop.close()
  }
})

// Modal-Cari-Top
const modalCariTop = document.querySelector("[data-modal-cari-top]")
const openModalCariTop = document.querySelector("[open-modal-cari-top]")
openModalCariTop.addEventListener("click", () => { modalCariTop.showModal() })
modalCariTop.addEventListener("click", e => {
  const dialogDimensions = modalCariTop.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalCariTop.close()
  }
})




// Modal-Kategori-Down
const modalKategoriDown = document.querySelector("[data-modal-kategori-down]")
const openModalKategoriDown = document.querySelector("[open-modal-kategori-down]")
openModalKategoriDown.addEventListener("click", () => { modalKategoriDown.showModal() })
modalKategoriDown.addEventListener("click", e => {
  const dialogDimensions = modalKategoriDown.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalKategoriDown.close()
  }
})

// Modal-Cari-Down
const modalCariDown = document.querySelector("[data-modal-cari-down]")
const openModalCariDown = document.querySelector("[open-modal-cari-down]")
openModalCariDown.addEventListener("click", () => { modalCariDown.showModal() })
modalCariDown.addEventListener("click", e => {
  const dialogDimensions = modalCariDown.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalCariDown.close()
  }
})

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);