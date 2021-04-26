const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const orderButton = document.querySelector(".top-item__order");
const orderPopup = document.querySelector(".modal-order");
const orderClose = document.querySelector(".overlay");

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
  orderClose.classList.add("modal-show");
  orderPopup.classList.add("modal-show");
});

orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
 orderPopup.classList.remove("modal-show");
 orderClose.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (orderClose.classList.contains("modal-show")) {
   evt.preventDefault();
   orderClose.classList.remove("modal-show");
  }
  }
});
