// Feather Icon
feather.replace();


// Modal-Cari
const modalCari = document.querySelector("[data-modal-cari]")
const openModalCari = document.querySelector("[open-modal-cari]")
const closeModalCari = document.querySelector(".close-modal-cari")
openModalCari.addEventListener("click", () => { modalCari.showModal() })
closeModalCari.addEventListener("click", () => { modalCari.close() })
modalCari.addEventListener("click", e => {
  const dialogDimensions = modalCari.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalCari.close()
  }
})

// Modal-Kategori
const modalKategori = document.querySelector("[data-modal-kategori]")
const openModalKategori = document.querySelector("[open-modal-kategori]")
// const closeModalKategori = document.querySelector(".close-modal-kategori")
openModalKategori.addEventListener("click", () => { modalKategori.showModal() })
// closeModalKategori.addEventListener("click", () => { modalKategori.close() })
modalKategori.addEventListener("click", e => {
  const dialogDimensions = modalKategori.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modalKategori.close()
  }
})