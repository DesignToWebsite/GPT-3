//NAV

const nav = document.querySelector(".list");
const menu = document.querySelector(".nav-menu");
menu.addEventListener("click", function () {
  nav.classList.toggle("show");
  console.log("clicked");
});

//prevent default message
FormData.addEventListener("submit", (e) => {
  e.preventDefault();
});
