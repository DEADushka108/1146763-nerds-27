/* Модальное окно */

function toggleHidden (btn, section) {
  btn.addEventListener('click', function (btn) {
    btn.preventDefault();
    section.classList.toggle('modal-hidden');
  });
}

let btnPopUp = document.querySelector('.btn-popup');
let btnWriteUsClose = document.querySelector('.btn-close');
let writeUs = document.querySelector('.write-us');

toggleHidden(btnPopUp, writeUs);
toggleHidden(btnWriteUsClose, writeUs);

/*Переключатель слайдера*/ 

function toggleSlides (toggles, slides) {
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function() {
      for (let j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
        slides[i].classList.add('active');
        }
      });
  }
}

let slider = document.querySelector('.slide-list');
let totalSlides = slider.children;
let totalToggles = document.querySelectorAll('.slider-toggle');

toggleSlides(totalToggles, totalSlides);