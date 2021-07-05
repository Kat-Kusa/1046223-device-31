var link = document.querySelector(".contacts__button");
var popup = document.querySelector(".modal");
var area = popup.querySelector(".modal__container");
var close = popup.querySelector(".modal__button");
var form = popup.querySelector("[name=userfield-form]");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=user-mail]");
var message = popup.querySelector("[name=user-message]");
var link_map = document.querySelector(".contacts__map");
var popup_map = document.querySelector(".modal-map");
var area_map = popup_map.querySelector(".modal-map__container");
var close_map = popup_map.querySelector(".modal-map__button");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  area.classList.add("modal-show-animation");
  username.focus();
});
link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("modal-map-show");
  area_map.classList.add("modal-map-show-animation");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove("modal-map-show");
  popup_map.classList.remove("modal-map-error");
});
popup.addEventListener("click", function (evt) {
  if (!evt.target.classList.contains('modal')) {
    return;
  }
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
popup_map.addEventListener("click", function (evt) {
  if (!evt.target.classList.contains('modal-map')) {
    return;
  }
  evt.preventDefault();
  popup_map.classList.remove("modal-map-show");
  popup_map.classList.remove("modal-map-error");
});
form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    area.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    area.classList.add("modal-error");
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_map.classList.contains("modal-map-show")) {
      popup_map.classList.remove("modal-map-show");
      popup_map.classList.remove("modal-map-error");
    }
  }
});
