var open = document.querySelector(".dropdown-menu__button--open");
var close = document.querySelector(".dropdown-menu__button--close");
var dropdown = document.querySelector(".modal-login");
var focusblock = document.querySelector(".main-nav__list-modal");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.add("dropdown-menu__button--close1");
  close.classList.add("dropdown-menu__button--open1");
  dropdown.classList.add("modal-show");
  focusblock.classList.add("main-nav__list-modal-1");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.remove("dropdown-menu__button--close1");
  close.classList.remove("dropdown-menu__button--open1");
  dropdown.classList.remove("modal-show");
  focusblock.classList.remove("main-nav__list-modal-1");

  dropdown.classList.remove("modal-error");
});
