let btnPopUp = document.querySelector('.btn-popup');
let btnWriteUsClose = document.querySelector('.btn-close');
let writeUs = document.querySelector('.write-us');
let slider = document.querySelector('.slide-list');
let totalSlides = slider.children;
let totalToggles = document.querySelectorAll('.slider-toggle');

/* Модальное окно */

function showPopup (btn, section) {
  btn.addEventListener('click', function (btn) {
    btn.preventDefault();
    section.classList.toggle('modal-show');
  });
}

/*Переключатель слайдера*/ 

function toggleSlides (toggles, slides) {
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function() {
      for (let j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
        slides[i].classList.add('active');
        toggles[j].classList.remove('active-toggle');
        toggles[i].classList.add('active-toggle');
        }
      });
  }
}

showPopup(btnPopUp, writeUs);
showPopup(btnWriteUsClose, writeUs);
toggleSlides(totalToggles, totalSlides);