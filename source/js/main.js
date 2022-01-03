const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const orderButton = document.querySelectorAll('.order-button');
const modal = document.querySelector('.modal');
const modalOrder = document.querySelector('.modal__order');
const overlay = document.querySelector('.overlay');

const PREVIOUS_BUTTON = document.querySelector('.reviews__pagination-button--previous');
const NEXT_BUTTON = document.querySelector('.reviews__pagination-button--next');
const slides = document.querySelectorAll('.slider__item');

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

for (let i = 0; i < orderButton.length; i++) {
  orderButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.add('overlay--show');
    modal.classList.add('modal--show');
    modalOrder.classList.add('modal__order--show');
  })
};

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.remove('overlay--show');
  modal.classList.remove('modal--show');
  modalOrder.classList.remove('modal__order--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('overlay--show'),
      modal.classList.contains('modal--show'),
      modalOrder.classList.contains('modal__order--show')) {
      evt.preventDefault();
      overlay.classList.remove('overlay--show');
      modal.classList.remove('modal--show');
      modalOrder.classList.remove('modal__order--show');
    }
  }
});

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

let currentSlide = 0;

const activateSlide = n => {
  for (slide of slides) {
    slide.classList.remove('slider__item-active');
    // У всех слайдов удаляем
  }
  slides[n].classList.add('slider__item-active');
  // Текущему слайду добавляем
}

const nextSlide = () => {
  if (currentSlide == slides.length - 1) { //если слайд последний
    currentSlide = 0; //переходим на 1 слайд
    activateSlide(currentSlide);
  } else {
    currentSlide++;
    activateSlide(currentSlide);
  }
}

const previousSlide = () => {
  if (currentSlide == 0) { //если слайд первый
    currentSlide = slides.length - 1; //переходим на последний слайд
    activateSlide(currentSlide);
  } else {
    currentSlide--;
    activateSlide(currentSlide);
  }
}

NEXT_BUTTON.addEventListener('click', nextSlide);
PREVIOUS_BUTTON.addEventListener('click', previousSlide);
