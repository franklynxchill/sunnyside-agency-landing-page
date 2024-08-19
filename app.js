const hamburger = document.getElementById("hamburger");
const menuBtn = document.querySelector(".menu-btn");


hamburger.addEventListener('click', () => {
  menuBtn.classList.toggle("toggle-menu")
})
