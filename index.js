const links = document.querySelectorAll(".list-el");
const container = document.querySelector(".nav-link-holder");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active")
  });
});


















