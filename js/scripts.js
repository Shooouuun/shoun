var link = document.querySelector(".modal-open");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var focusblock = document.querySelector(".main-nav__list-modal");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  link.classList.add("modal-open-1");
  close.classList.add("modal-close-1");
  focusblock.classList.add("main-nav__list-modal-1");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  link.classList.remove("modal-open-1");
  close.classList.remove("modal-close-1");
  focusblock.classList.remove("main-nav__list-modal-1");

  popup.classList.remove("modal-error");
});
