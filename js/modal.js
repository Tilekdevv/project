const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector("#btn-get");
const closeModalBtn = document.querySelector(".modal_close");
let modalOpened = false;

const openModal = () => {
  if (modalOpened) return;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalOpened = true;
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
};

modalOpenBtn.onclick = openModal;
closeModalBtn.onclick = closeModal;
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const scroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    openModal();
    window.removeEventListener("scroll", scroll);
  }
};

window.addEventListener("scroll", scroll);

setTimeout(() => openModal(), 10000);
