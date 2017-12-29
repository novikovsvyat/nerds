var link = document.querySelector(".writeus-button");

var popup = document.querySelector(".modal-writeus");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".writeus-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");


if (!popup.classList.contains("modal-show")) {
  username.required = false;
  email.required = false;
  text.required = false;
} 

username.addEventListener("click", function (evt) {
  username.classList.remove("input-invalid");
});

email.addEventListener("click", function (evt) {
  email.classList.remove("input-invalid");
});

text.addEventListener("click", function (evt) {
  text.classList.remove("input-invalid");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  username.classList.remove("input-invalid");
  email.classList.remove("input-invalid");
  text.classList.remove("input-invalid");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !text.value) {
    evt.preventDefault();
    if (!username.value ) {
      username.classList.add("input-invalid");
    }
    if (!email.value ) {
      email.classList.add("input-invalid");
    }
    if (!text.value ) {
      text.classList.add("input-invalid");
    }
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      username.classList.remove("input-invalid");
      email.classList.remove("input-invalid");
      text.classList.remove("input-invalid");
    }
  }
});