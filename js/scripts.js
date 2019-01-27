var open = document.querySelector(".dropdown-menu__button--open");
var close = document.querySelector(".dropdown-menu__button--close");
var dropdown = document.querySelector(".main-header");
var focusblock = document.querySelector(".main-nav__wrapper");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.add("dropdown-menu__button--close1");
  close.classList.add("dropdown-menu__button--open1");
  dropdown.classList.add("main-header1");
  focusblock.classList.add("main-nav__wrapper1");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.classList.remove("dropdown-menu__button--close1");
  close.classList.remove("dropdown-menu__button--open1");
  dropdown.classList.remove("main-header1");
  focusblock.classList.remove("main-nav__wrapper1");

  dropdown.classList.remove("modal-error");
});
