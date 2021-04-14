const nav = document.querySelector(".navigation");

// Smooth Scrolling
document.querySelector(".menu").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("menu-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Nav fade on hover
const handelHover = function (e) {
  if (e.target.classList.contains("menu-link")) {
    const link = e.target;
    const siblings = link.closest(".navigation").querySelectorAll("menu-link");
    const logo = link.closest(".navigation").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handelHover.bind(0.5));
nav.addEventListener("mouseout", handelHover.bind(1));
