// Бургер-меню
const burgerMenu = document.getElementById("burgerMenu");
const nav = document.getElementById("nav");

if (burgerMenu && nav) {
  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Закрытие меню при клике на ссылку
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 1024) {
        burgerMenu.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });

  // Закрытие меню при изменении размера окна (если перешли на десктоп)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      burgerMenu.classList.remove("active");
      nav.classList.remove("active");
    }
  });
}
