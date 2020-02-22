
let btnPopUp = document.querySelector(".btn-popup");
let btnWriteUsClose = document.querySelector(".btn-close");
let writeUs = document.querySelector(".write-us");

let form = writeUs.querySelector("form");
let userName = writeUs.querySelector("[name=name]");
let email = writeUs.querySelector("[name=email]");
let text = writeUs.querySelector("[name=comment]")
  
let isStorageSupport = true;
let storageName = "";
let starageEmail = "";

let slider = document.querySelector(".slide-list");
let totalSlides = slider.children;
let totalToggles = document.querySelectorAll(".slider-toggle");

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

toggleSlides(totalToggles, totalSlides);

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
  
btnPopUp.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("modal-show");
    
  if (storageName && storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
  } else {
    text.focus();
    }
});
  
btnWriteUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
  writeUs.classList.remove("modal-error");
});
  
form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
      }
    }
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains("modal-show")) {
      writeUs.classList.remove("modal-show");
      writeUs.classList.remove("modal-error");
      }
    }
});