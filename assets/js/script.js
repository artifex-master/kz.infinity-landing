'use strict';

const toggleFunc = function (elem) { elem.classList.toggle("active"); }; 

const desktop_menu = document.querySelector("[data-toggle]");
const mobile_menu = document.querySelector("[data-toggle-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");

desktop_menu.addEventListener("click", function() {
  toggleFunc(navbar);
  toggleFunc(overlay);
});

mobile_menu.addEventListener("click", function() {
  toggleFunc(navbar);
  toggleFunc(overlay);
});
