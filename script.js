const btnMenu = document.querySelectorAll(".icon-mobile-nav");
const navBar = document.querySelector(".main-nav");
const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const selected = document.querySelector(href);
      selected.scrollIntoView({ behavior: "smooth" });
    }
  })
);

btnOpen.addEventListener("click", () => {
  navBar.style.display = "flex";
  btnClose.classList.remove("hidd3n");
  btnOpen.classList.add("hidd3n");
});
btnClose.addEventListener("click", () => {
  btnOpen.classList.remove("hidd3n");
  btnClose.classList.add("hidd3n");
  navBar.style.display = "none";
});
