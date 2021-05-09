const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const orderButton = document.querySelector(".top-item__order");
const modal = document.querySelector(".modal");
const modalOrder = document.querySelector(".modal__order");
const overlay = document.querySelector(".overlay");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

orderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay--show");
  modal.classList.add("modal--show");
  modalOrder.classList.add("modal__order--show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal--show");
  modalOrder.classList.remove("modal__order--show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (overlay.classList.contains("overlay--show"),
      modal.classList.contains("modal--show"),
      modalOrder.classList.contains("modal__order--show")) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal--show");
    modalOrder.classList.remove("modal__order--show");
  }
  }
});
