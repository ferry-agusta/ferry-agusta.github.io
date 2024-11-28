// Feather Icon
feather.replace();


// Dialog-Modal
const modal = document.querySelector("[data-modal]")
const openButton = document.querySelector("[data-open-modal]")
// const closeButton = document.querySelector("[data-close-modal]")

openButton.addEventListener("click", () => {
  modal.showModal();
})

// closeButton.addEventListener("click", () => {
//   modal.close();
// })

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