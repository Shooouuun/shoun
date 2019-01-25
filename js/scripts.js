var open = document.querySelector(".dropdown-menu__button--open");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".dropdown-menu__button--close");
var focusblock = document.querySelector(".main-nav__list-modal");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  open.classList.toggle("dropdown-menu__button--close");
  close.classList.toggle("dropdown-menu__button--open");
  focusblock.classList.add("main-nav__list-modal-1");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  open.classList.toggle("dropdown-menu__button--open");
  close.classList.toggle("dropdown-menu__button--close");
  focusblock.classList.remove("main-nav__list-modal-1");

  popup.classList.remove("modal-error");
});
