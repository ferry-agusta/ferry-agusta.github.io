// Feather Icon
feather.replace();


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


// OVERLAY
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}




// OVERLAY PRODUK
const el_Overlay_Produk = document.querySelector("#overlay-produk")
el_Overlay_Produk.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    e.target.parentNode.style.display = 'none'
  }
  if (e.target.classList.contains('prev')) {
    plusSlides(-1)
  }
  if (e.target.classList.contains('next')) {
    plusSlides(1)
  }
})

// PRODUK DETAIL
const el_Produk = document.querySelectorAll("#produk > .good")
el_Produk.forEach(function (el, index, arr) {
  el.addEventListener("click", () => {
    openOverlayProduk()
  })
})

function openOverlayProduk() {
  document.getElementById("overlay-produk").style.display = "block";
}