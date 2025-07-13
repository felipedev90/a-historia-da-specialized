VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

const toggleButton = document.querySelector(".nav__toggle");
const navLista = document.querySelector(".nav__lista");

toggleButton.addEventListener("click", () => {
  navLista.classList.toggle("active");
});

ScrollReveal().reveal("*:not(footer):not(footer *):not(nav):not(nav *)", {
  origin: "bottom",
  distance: "60px",
  duration: 600,
  delay: 100,
  easing: "ease-out",
  reset: false,
});

lightGallery(document.querySelector(".swiper-wrapper"), {
  selector: "a",
  plugins: [lgZoom, lgThumbnail],
  hideBarsDelay: 3000,
  closable: true,
  showCloseIcon: true,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
