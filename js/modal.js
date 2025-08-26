const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modalOpenBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

window.addEventListener("scroll");
window.removeEventListener("scroll");
